import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 bg-light-coffee">
            <div className="flex-1">
            <div className="dropdown text-white">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-light-coffee text-white">
                    <li><a>Inicio</a></li>
                    <li><a>Sobre Nosotros</a></li>
                    <li><a>Tienda</a></li>
                </ul>
            </div>
                <a className="btn btn-ghost normal-case text-xl text-white">CaféPorMayor</a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <CartWidget/>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-light-coffee text-white">
                        <li>
                            <a className="justify-between">
                                Perfil
                                <span className="badge bg-dark-coffee text-white">Nuevo</span>
                            </a>
                        </li>
                        <li><a>Configuración</a></li>
                        <li><a>Deslogearse</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar
