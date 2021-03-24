import React from 'react';

export const InfiniteScrollerContext = React.createContext({
  hasMoreItems: false,
  loadingItems: false,
  onLoadMore: () => {},
  outerElement: undefined as HTMLElement | null | undefined,
});
