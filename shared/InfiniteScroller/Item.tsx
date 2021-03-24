/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import { useInView } from "react-intersection-observer";

import { InfiniteScrollerContext } from "./context";

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /* How far from the item (in "px") before showing/hiding the item contents. */
  showHideThreshold?: number;
  children: React.ReactNode;
}

/**
 * Wraps every item that is infinitely loaded to show/hide content when not in view. This
 * improves rendering performance when the list grows large.
 */
const Item = ({
  children,
  style,
  showHideThreshold = 0,
  ...restOfProps
}: ItemProps) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const dimensionsRef = React.useRef<{ width: number; height: number } | null>(
    null
  );
  const [internalInView, setInternalInView] = React.useState(true);

  const { outerElement } = React.useContext(InfiniteScrollerContext);

  const [ref, inView] = useInView({
    root: outerElement,
    rootMargin: `${showHideThreshold}px 0px`,
  });

  // On initial render (when the ref gets set) and if the item is not inView, measure it then hide.
  const hasRef = containerRef.current;
  React.useEffect(() => {
    if (!inView && containerRef.current) {
      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight;

      dimensionsRef.current = { width, height };
    }
    setInternalInView(inView);
    // eslint-disable-next-line
  }, [hasRef]);

  // When an item goes out of view, measure it and save its height/width. When it's hidden,
  // we set an empty div with the height/width to mimick the item being in-view.
  React.useEffect(() => {
    if (!inView && containerRef.current) {
      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight;

      dimensionsRef.current = { width, height };
    }
    setInternalInView(inView);
  }, [inView]);

  // Do not hide if the dimensions have not bee measured yet.
  const isShown = internalInView || !dimensionsRef.current;
  // Do not set width if the item is shown.
  const width =
    !isShown && dimensionsRef.current ? dimensionsRef.current.width : undefined;
  // Do not set height if the item is shown.
  const height =
    !isShown && dimensionsRef.current
      ? dimensionsRef.current.height
      : undefined;

  return (
    <div
      ref={(r) => {
        ref(r);
        containerRef.current = r;
      }}
      style={{ ...style, width, height }}
      {...restOfProps}
    >
      {isShown ? children : null}
    </div>
  );
};

export default Item;
