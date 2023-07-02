import classNames from "classnames";
import { ScrollerProperties } from "./scroller-properties.interface";
import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";

export const Scroller = ({
  className,
  isLoading,
  error,
  pagination,
  children,
}: ScrollerProperties) => {
  if (error) {
    return (
      <div className={classNames("text-center", className)}>No Result</div>
    );
  }

  return (
    <>
      <InfiniteScroll
        className={classNames("flex flex-col gap-4", className)}
        dataLength={React.Children.count(children)}
        next={() => {
          if (pagination?.onEnd) {
            pagination.onEnd();
          }
        }}
        hasMore={pagination?.hasMore ?? false}
        loader={isLoading ? "Loading..." : undefined}
      >
        {children}
      </InfiniteScroll>
    </>
  );
};
