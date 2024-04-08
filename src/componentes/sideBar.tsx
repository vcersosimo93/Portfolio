import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <aside className={`aside ${open ? "open" : ""}`}>
            <div onClick={handleOpen} className="nav-toggler">
                <span />
            </div>
            <div className="aside-inner">
                <div className="logo">
                    <Link href="/" onClick={handleClose}>
                        Logo
                    </Link>
                </div>
                <ul className="nav">
                    <li onClick={handleClose}>
                        <Link href="/" className={`${router.pathname === "/" && "active"}`}>
                            <i className="fa fa-home" /> Home
                        </Link>
                    </li>
                    {/* Resto de los elementos de la barra lateral */}
                </ul>
                <div className="copyright">
                    Created with ❤️ By{" "}
                    <a href="http://alsiam.com" target="_blank" rel="noopener noreferrer">
                        Al Siam
                    </a>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
