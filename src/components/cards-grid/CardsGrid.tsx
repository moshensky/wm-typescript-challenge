import cx from "clsx";
import { Children, FC } from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
  whenEmpty?: React.ReactNode;
};

export const CardsGrid: FC<Props> = ({ className, children, whenEmpty }) => {
  if (children === undefined) {
    return <div className={cx(className)}>{whenEmpty || "Empty"}</div>;
  }
  return (
    <div
      data-testid="cards-grid"
      className={cx(
        className,
        "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
      )}
    >
      {Children.map(children, (x) => x)}
    </div>
  );
};
