import { ReactElement } from "react";

type Props = Readonly<{
  title: ReactElement;
  message: ReactElement;
}>;

export const WarningMessage = ({ title, message }: Props) => {
  return (
    <div className="space-y-3 rounded border border-gray-200 bg-white/25 p-5 text-sm">
      <p className="block text-radial">{title}</p>
      <p className="block">{message}</p>
    </div>
  );
};
