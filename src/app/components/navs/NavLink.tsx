import { NavInterface } from "@/app/utils/constants";

interface NavLinkProps {
  item: NavInterface;
}

const NavLink = ({ item }: NavLinkProps) => {
  return (
    <a href={`${item.link}`} className="text-xs text-white-600">
      {item.label}
    </a>
  );
};

export default NavLink;
