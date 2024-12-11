import { navsList } from "../utils/constants";
import NavLink from "./navs/NavLink";

const Header: React.FC = () => {
  return (
    <div className="w-full mx-auto flex px-12 py-8 justify-between">
      <h1 className="text-2xl font-bold text-white my-auto">Fitness</h1>

      <nav className="sm:space-x-8 md:space-x-16 my-auto hidden sm:block">
        {navsList.map((item) => (
          <NavLink key={item.id} item={item} />
        ))}
      </nav>

      <button className="text-xs px-4 py-1 rounded-md text-darkPrimary bg-greenPrimary hidden md:block">
        Custom Plan
      </button>
    </div>
  );
};

export default Header;
