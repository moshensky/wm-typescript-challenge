import { ReactNode } from "react";

type Props = Readonly<{
  title: ReactNode;
  message: ReactNode;
}>;

export const WarningMessage = ({ title, message }: Props) => {
  return (
    <div className="space-y-3 rounded border border-gray-200 bg-white/25 p-5 text-primary">
      <h1 className="block text-red-700 dark:text-orange-100">{title}</h1>
      <p className="block text-sm">{message}</p>
    </div>
  );
};
