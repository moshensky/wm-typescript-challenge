import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const MainHeader = ({ children }: Props) => (
  <h1 className="text-2xl text-primary">{children}</h1>
);
