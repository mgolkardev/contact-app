import classNames from "classnames";
import { GridProperties } from "./grid-properties.interface";

export const Grid = ({
  className,
  isLoading,
  error,
  children,
}: GridProperties) => {
  if (error) {
    return (
      <div className={classNames("text-center", className)}>No Result</div>
    );
  }

  return (
    <>
      <div
        className={classNames(
          "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10",
          className
        )}
      >
        {isLoading ? "Loading..." : children}
      </div>
    </>
  );
};
