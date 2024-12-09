import { HeaderItemMenu } from "../header-item-menu";
import { LogoHeader } from "../logo";

export const DesktopHeader = () => {
  return (
    <div className="w-full max-w-[1440px] flex justify-between mx-auto lg:px-4">
      <LogoHeader />

      <nav className="flex ">
        <ul className="flex gap-4 items-center">
          <HeaderItemMenu href="/" name="Item de menu" />
          <HeaderItemMenu href="/" name="Item de menu" />
          <HeaderItemMenu href="/" name="Item de menu" />
          <HeaderItemMenu href="/" name="Item de menu" />
        </ul>
      </nav>
    </div>
  );
};
