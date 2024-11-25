interface NavLinkProps {
  label: string;
}

const NavLink = ({ label }: NavLinkProps) => {
  return (
    <button className="text-xs text-white-600 hover:bg-darkSecondary">{label}</button>
  );
};

export default NavLink;
