# Infinite Scroller

A small library to allow for an infinitely scrollable page in a performant manner.

## Basic Usage

```javascript
import InfiniteScroller from 'infinite-scroller';

<InfiniteScroller.Container
  hasMoreItems={true/false}
  loadingMoreItems={true/false}
  onLoadMore={() => {
    // Function to call when new items should be loaded.
  }}
>
  {
    results.map((result) => (
      <InfiniteScroller.Item
        key={result.id}
        showHideThreshold={2500}
      >
        // Render item content here.
      </InfiniteScroller.Item>
    ))
  }
  <InfiniteScroller.LoadMore
    loadMoreThreshold={500}
  >
    Load More
  </InfiniteScroller.LoadMore>
</InfiniteScroller.Container>
```
