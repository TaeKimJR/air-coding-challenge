/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import { useInView } from "react-intersection-observer";

import { InfiniteScrollerContext } from "./context";

interface LoadMoreProps extends React.HTMLAttributes<HTMLButtonElement> {
  /* How far from the bottom (in "px") before beginnning to load more results. */
  loadMoreThreshold?: number;
  children: React.ReactNode;
}

/**
 * A "Load More" button that triggers the "onLoadMore" handler when it is almost in-view or clicked. You
 * should place this at the bottom of your infinitely-loaded list and it should eventually become reachable
 * by the User.
 */
const LoadMore = ({
  children,
  loadMoreThreshold = 0,
  ...restOfProps
}: LoadMoreProps) => {
  const {
    hasMoreItems,
    loadingItems,
    onLoadMore,
    outerElement,
  } = React.useContext(InfiniteScrollerContext);

  const [ref, inView] = useInView({
    root: outerElement,
    rootMargin: `${loadMoreThreshold}px 0px`,
  });

  React.useEffect(() => {
    if (inView && hasMoreItems && !loadingItems) {
      onLoadMore();
    }
  }, [inView, hasMoreItems, loadingItems, onLoadMore]);

  // Do not render anything when there are no more items to load.
  if (!hasMoreItems) {
    return null;
  }

  return (
    <button
      ref={ref}
      disabled={loadingItems}
      onClick={onLoadMore}
      {...restOfProps}
    >
      {children}
    </button>
  );
};

export default LoadMore;
