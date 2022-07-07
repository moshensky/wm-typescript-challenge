import { Link } from "react-router-dom";
import { ROUTES } from "router/routes";
import { ReactComponent as Cat } from "./cat.svg";

export const NotFound = () => (
  <div className="container flex flex-col items-center justify-center px-5 text-primary md:flex-row">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-2xl font-light leading-normal md:text-3xl">
        Sorry we couldn&apos;t find this page.{" "}
      </p>
      <p className="mb-8">
        But don&apos;t worry, you can find plenty of cocktails on our homepage.
      </p>

      <Link
        to={ROUTES.HOME}
        className="rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700  active:bg-blue-600"
      >
        back to homepage
      </Link>
    </div>
    <div className="max-w-lg">
      <Cat />
    </div>
  </div>
);
