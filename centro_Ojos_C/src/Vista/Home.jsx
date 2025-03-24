export const Home = () => {
    return (
        <>
            <main className="w-full min-h-screen">
                <section className="w-full h-[90vh]  flex flex-col justify-between items-center pt-3">

                    <img className="absolute z-0 h-full" src="../public/img/slide-quirofano.jpg" alt="" />

                    {/* Contenedor de las cards */}

                    <div className="w-4/5 h-full flex flex-col">

                        <div className="flex justify-center items-center  w-full h-full">

                            <div className="bg-slate-200 w-2/6 h-full grid grid-cols-1 lg:grid-cols-4 lg:h-3/6 lg:w-5/6 ">

                                <div className="bg-teal-400 mx-5 flex flex-col justify-center text-center font-merriweather z-10 shadow-lg rounded-sm gap-3 text-white">
                                    <div>🗓️Turnos</div>
                                    <div>Solicite su turno online</div>
                                    <div><button className="py-2 px-4 border border-white rounded-full">Sacar turno</button></div>
                                </div>

                                <div className="bg-cyan-700 mx-5 flex flex-col justify-center text-center font-merriweather z-10 shadow-lg rounded-sm gap-3 text-white">
                                    <div>📍Ubicacion</div>
                                    <div>Santa Fe 40 , Neuquen</div>
                                    <div><button className="py-2 px-4 border border-white rounded-full">Ver Google Maps</button></div>
                                </div>
                                <div className="bg-sky-700 mx-5 flex flex-col justify-center text-center font-merriweather z-10 shadow-lg rounded-sm gap-3 text-white">
                                    <div>🕘Horarios</div>
                                    <div>Lunes a Viernes</div>
                                    <div className="text-lg">de 9hs a 18hs</div>
                                </div>
                                <div className="bg-sky-800 mx-5 flex flex-col justify-center text-center font-merriweather z-10 shadow-lg rounded-sm gap-3 text-white">
                                    <div>📱Contacto</div>
                                    <div><button className="py-2 px-4 border border-white rounded-full">299-577-1130</button></div>
                                    <div>299-442-4484</div>
                                </div>
                            </div>

                        </div>

                        <div className="flex justify-center items-start w-full h-2/4 border-2 bg-slate-200">
                            <button className="px-7 py-3 rounded-xl  text-white bg-blue-500 text-lg font-merriweather z-10">
                                Ver servicios
                            </button>
                        </div>

                    </div>



                </section>
            </main>
        </>
    );
}
export default Home;
