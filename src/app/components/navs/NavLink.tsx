interface NavLinkProps {
  label: string;
}

const NavLink = ({ label }: NavLinkProps) => {
  return <button className="text-xs text-white-600">{label}</button>;
};

export default NavLink;
