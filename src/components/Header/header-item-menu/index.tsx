interface HeaderItemMenuProps {
  href: string;
  name: string;
}

export const HeaderItemMenu = ({ href, name }: HeaderItemMenuProps) => {
  return (
    <li>
      {" "}
      <a
        className="text-base leading-10 lg:text-lg hover:font-semibold"
        href={href}
      >
        {" "}
        {name}
      </a>{" "}
    </li>
  );
};
