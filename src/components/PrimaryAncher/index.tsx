import { Link } from "react-router-dom";

type IAncherPrimary = {
  path: string;
  children: string | JSX.Element;
};

export const PrimaryAncher = ({ children, path }: IAncherPrimary) => {
  return (
    <Link
      to={path}
      className=" cursor-pointer text-brand-primary font-extrabold active:text-gray-primary "
    >
      {children}
    </Link>
  );
};
