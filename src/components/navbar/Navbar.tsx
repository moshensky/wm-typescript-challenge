import cx from "clsx";
import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "router/routes";
import { useCallback, useRef, useState } from "react";
import { useOnClickOutside } from "hooks";
import { HamburgerButton } from "../hamburger-button/HamburgerButton";
import { Logo } from "../logo";
import { ColorThemeToggle } from "../color-theme-toggle";

const navbarStyles = {
  default:
    "block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-gray-500 md:dark:hover:bg-transparent md:dark:hover:text-white",
  active:
    "block rounded bg-blue-700 py-2 pr-4 pl-3 text-white dark:text-white md:bg-transparent md:p-0 md:text-gray-900 underline dark:md:text-white",
};

type MenuItem = {
  testId: string;
  route: string;
  label: string;
};
const menuItems: ReadonlyArray<MenuItem> = [
  { testId: "navbar-link--home", route: ROUTES.HOME, label: "Home" },
  { testId: "navbar-link--recipes", route: ROUTES.RECIPES, label: "Recipes" },
];

export const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const refBtn = useRef<HTMLButtonElement>(null);
  const refDiv = useRef<HTMLDivElement>(null);
  const handleCloseMenu = useCallback(
    () => isExpanded && setIsExpanded(false),
    [isExpanded, setIsExpanded]
  );
  useOnClickOutside(handleCloseMenu, isExpanded, refBtn, refDiv);

  return (
    <nav className="py-6 px-2 sm:px-4 md:pt-12">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to={ROUTES.HOME} className="mr-6 flex flex-1">
          <Logo />
          <span className="sr-only">Wieni</span>
        </Link>
        <ColorThemeToggle className="mr-6" />
        <HamburgerButton
          ref={refBtn}
          className="md:hidden"
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        />
        <div
          ref={refDiv}
          className={cx("w-full md:block md:w-auto", {
            hidden: !isExpanded,
          })}
        >
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            {menuItems.map((x) => (
              <li key={x.testId}>
                <NavLink
                  data-testid={x.testId}
                  to={x.route}
                  onClick={handleCloseMenu}
                  className={({ isActive }) =>
                    isActive ? navbarStyles.active : navbarStyles.default
                  }
                >
                  {x.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
