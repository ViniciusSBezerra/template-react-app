import { useMediaQuery } from "react-responsive";
import { DesktopHeader } from "./header-desktop";
import { MobileHeader } from "./header-mobile";

export const Header = () => {
  const headerController = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <header className="flex justify-between h-24 px-4 lg:px-0 shadow-lg">
      {" "}
      {headerController ? <DesktopHeader /> : <MobileHeader />}{" "}
    </header>
  );
};
