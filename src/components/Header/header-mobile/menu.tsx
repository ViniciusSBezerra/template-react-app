import { useState } from "react";
import { IconMenu } from "../../../assets/icons/icon-menu";
import { CloseIcon } from "../../../assets/icons/icon-close";
import { HeaderItemMenu } from "../header-item-menu";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toogleMenu = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <>
      <button aria-label="Abrir menu" onClick={toogleMenu}>
        <IconMenu />
      </button>

      {isOpen ? (
        <nav className="w-full h-screen bg-white fixed inset-0 ">
          <button
            aria-label="Fechar menu"
            className="absolute top-8 right-4"
            onClick={toogleMenu}
          >
            {" "}
            <CloseIcon />
          </button>

          <ul className="pt-8 pl-4">
            <HeaderItemMenu href="/" name="Item de menu" />
            <HeaderItemMenu
              href="/"
              name="Item de menu"
            />
            <HeaderItemMenu
              href="/"
              name="Item de menu"
            />
            <HeaderItemMenu
              href="/"
              name="Item de menu"
            />
          </ul>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
};
