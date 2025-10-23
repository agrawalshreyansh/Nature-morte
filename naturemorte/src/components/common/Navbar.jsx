import { Link } from "react-router-dom";

export default function Navbar() {
  const pages = [
    "About",
    "Sculpture Park",
    "Visit",
    "Curational Grant",
    "Vision",
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button className="hover:opacity-70 transition-opacity">
            <Link to="/">
              <span className="text-xl tracking-wide">SAAT SAATH ARTS</span>
            </Link>
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {pages.map((el) => {
              return (
                <Link key={el} to={el.split(" ").at(-1).toLowerCase()}>
                  <button className="hover:text-gray-600 transition-colors">
                    {el}
                  </button>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
