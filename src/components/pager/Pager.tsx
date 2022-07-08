import cx from "clsx";
import { Button } from "../button";

type Props = {
  className?: string;
  disabledNext?: boolean;
  disabledPrevious?: boolean;
  onPrevious: () => void;
  onNext: () => void;
};

export const Pager = ({
  className,
  disabledNext,
  disabledPrevious,
  onPrevious,
  onNext,
}: Props) => (
  <div className={cx(className, "flex justify-center")}>
    <Button
      className="block"
      label="Previous"
      onClick={onPrevious}
      disabled={disabledPrevious}
    />
    <Button
      className="ml-8 block"
      label="Next"
      onClick={onNext}
      disabled={disabledNext}
    />
  </div>
);
