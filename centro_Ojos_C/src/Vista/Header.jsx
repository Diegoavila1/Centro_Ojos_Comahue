
export const Header = () => {
    return (
        <>
            <header className="w-full h-20 bg-white">
                <nav className="m-auto flex flex-row w-4/5 justify-between bg-whie p-5">

                    <div className="w-40 h-10 flex justify-center items-center">
                        <img src="../public/img/logo-centro-de-ojos-comahue.png" alt="" />
                    </div>

                    <div className="w-4/11 flex items-center">
                    {/*Nav opciones - Resolucion Escritorio*/}
                        <ul className="flex-row gap-10 hidden lg:flex">
                            <li>
                                <a href="#" className=" font-merriweather ">Inicio</a>
                            </li>
                            <li>
                                <a href="#" className="font-merriweather">Sobre Nosotros</a>
                            </li>
                            <li>
                                <a href="#"  className="font-merriweather">Especialidades</a>
                            </li>
                            <li>
                                <a href="#"  className="font-merriweather">Contacto</a>
                            </li>
                            <li>
                                <a href="#"  className="font-merriweather">Turnos</a>
                            </li>
                        </ul>
                        
                        {/* Esta oculto el list*/}
                        <div className="w-7 h-7 lg:hidden">
                            <img src="../public/img/lista.png" alt="" />
                        </div>

                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header