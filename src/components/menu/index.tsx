import { NavLink } from "react-router-dom"

function Menu() {
    let menuPages = [
        { "page": "Dashboard", "path": "/" },
        { "page": "Clientes", "path": "/clientes" },
        { "page": "Pedidos", "path": "/pedidos" },
        { "page": "Produtos", "path": "/produtos" }
    ]

    return (
        <>
            <nav id="menu-navigator" className="menu-navigator flex space-x-4 justify-center items-start text-white rounded-md px-3 py-2 text-xs font-medium uppercase md:text-sm md:px-0 md:py-0">
                { menuPages.map(pages =>
                    <NavLink to={ pages.path } className={({ isActive }) => isActive ? "bg-pink-600 rounded-md px-3 py-2" : "hover:bg-pink-500 rounded-md px-3 py-2"}>
                        { pages.page }
                    </NavLink>
                ) }
            </nav>
        </>
    )
}

export default Menu