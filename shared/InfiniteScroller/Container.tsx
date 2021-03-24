/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import { InfiniteScrollerContext } from "./context";

const noop = () => {};

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /* The outer element with the scrollbar. */
  outerElement?: HTMLElement | null;
  /* Whether there are more items to load. */
  hasMoreItems: boolean;
  /* Whether items are currently loading. */
  loadingItems: boolean;
  /* The function to call to load more items. */
  onLoadMore?: () => void;
  /* The list that is infinitely scrollable. Be sure to include the <LoadMore /> component at the bottom. */
  children: React.ReactNode;
}

/**
 * The wrapper component around the infinitely loaded list. This component provides
 * information to its descendant components about infinite loading.
 */
export const Container = ({
  hasMoreItems,
  loadingItems,
  onLoadMore = noop,
  outerElement,
  children,
  ...restOfProps
}: ContainerProps) => {
  const infiniteScrollerContext = React.useMemo(
    () => ({
      hasMoreItems,
      loadingItems,
      onLoadMore,
      outerElement,
    }),
    [hasMoreItems, loadingItems, onLoadMore, outerElement]
  );

  return (
    <InfiniteScrollerContext.Provider value={infiniteScrollerContext}>
      <div {...restOfProps}>{children}</div>
    </InfiniteScrollerContext.Provider>
  );
};

export default Container;
