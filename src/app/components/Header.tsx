import { navsList } from "../utils/constants";
import NavLink from "./NavLink";

const Header: React.FC = () => {
  return (
    <div className="w-full mx-auto flex p-4 justify-between">
      <h1 className="text-2xl font-bold text-white my-auto">Fitness</h1>

      <nav className="sm:space-x-8 md:space-x-16 my-auto hidden sm:block">
        {navsList.map((item) => (
          <NavLink key={item.id} label={item.label} />
        ))}
      </nav>

      <button className="text-xs px-4 py-1 rounded-md text-darkPrimary bg-greenPrimary hidden sm:block">
        Custom Plan
      </button>
    </div>
  );
};

export default Header;
