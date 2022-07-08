import cx from "clsx";

type Props = {
  label: string;
  disabled?: boolean;
  className?: string;
  onClick: () => void;
};

export const Button = ({ className, label, disabled, onClick }: Props) => (
  <button
    disabled={disabled}
    type="button"
    className={cx(
      className,
      "rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150  active:bg-blue-600  disabled:opacity-50",
      { "hover:bg-blue-700": disabled !== true }
    )}
    onClick={onClick}
  >
    {label}
  </button>
);
