import { Outlet, useOutlet } from "react-router-dom";
import { Navbar } from "../components";

type MainLayoutProps = {
  children?: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const outlet = useOutlet();

  return (
    <div className="bg-primary" data-testid="main">
      <Navbar />
      <main role="main" className="px-8 py-6 sm:px-4">
        <div className="container mx-auto">
          {outlet ? <Outlet /> : children}
        </div>
      </main>
    </div>
  );
};
