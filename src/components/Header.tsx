import { NavLink } from "react-router";

const Header = () => {
    const base = "px-3 py-2 rounded-md text-sm font-medium hover:bg-[#363636]";
    const active = "bg-[#363636]";

    return (
        <header className="border-b border-white">
            <nav className="mx-auto max-w-5xl flex items-center justify-between p-4 text-white">
                <h1 className="text-xl">Kennedy Marren</h1>
                <div className="flex gap-2">
                    <NavLink to="/" className={
                        ({ isActive }) => `${base} ${isActive ? active : ""}`
                    }>Home</NavLink>
                    <NavLink to="/about"
                             className={({ isActive }) => `${base} ${isActive ? active : ""}`}>About</NavLink>
                    <a href="https://www.linkedin.com/in/kennedy-marren-3b7225351"
                       target="_blank"
                       rel="noopener noreferrer"
                       className={`${base}`}>
                        Linkedin
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;