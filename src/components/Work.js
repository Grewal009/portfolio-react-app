import portfolio from "../assets/projects/portfolio.jpg";
import dicegame from "../assets/projects/dice_game.jpg";
import cityskyline from "../assets/projects/city_skyline.jpg";
import balancesheet from "../assets/projects/balance_sheet.jpg";
import magazine from "../assets/projects/magazine.jpg";

const Work = () => {
    return(
        <div name="work" className="bg-[#08192f] w-full h-full text-gray-300 pt-20">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full lg:pl-20">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
                    <p className="py-4">Check out some of my recent work.</p>
                </div>

                {/**Container */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">

                    {/**Grid item */}
                    <div 
                    style={{backgroundImage: `url(${portfolio})`}} 
                    className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/**Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center"> 
                            <span className="text-xl font-bold text-white tracking-wider flex justify-center w-[280px]">
                                Portfolio using REACT
                            </span>

                            <div className="w-[300px] flex justify-center">
                                <a href="" target="_blank"><button className="text-center rounded-lg px-3 py-1 m-2 bg-white text-gray-280 font-bold text-lg outline outline-offset-2 outline-2 hover:text-gray-600 ">Demo</button></a>
                                <a href="https://github.com/Grewal009/portfolio-react-app" target="_blank"><button className="text-center rounded-lg px-3 py-1 m-2 bg-white text-gray-300 font-bold text-lg outline outline-offset-2 outline-2 hover:text-gray-600 ">Code</button></a>
                            </div>
                            
                        </div>
                    </div>

                    <div 
                    style={{backgroundImage: `url(${dicegame})`}} 
                    className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/**Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center"> 
                            <span className="text-xl font-bold text-white tracking-wider flex justify-center w-[280px]">
                                Dice-Game using HTML, CSS & JAVASCRIPT 
                            </span>

                            <div className="w-[300px] flex justify-center">
                                <a href="https://grewal009.github.io/Dice-Game/" target="_blank"><button className="text-center rounded-lg px-3 py-1 m-2 bg-white text-gray-280 font-bold text-lg outline outline-offset-2 outline-2 hover:text-gray-600 ">Demo</button></a>
                                <a href="https://github.com/Grewal009/Dice-Game" target="_blank"><button className="text-center rounded-lg px-3 py-1 m-2 bg-white text-gray-300 font-bold text-lg outline outline-offset-2 outline-2 hover:text-gray-600 ">Code</button></a>
                            </div>
                            
                        </div>
                    </div>


                    <div 
                    style={{backgroundImage: `url(${balancesheet})`}} 
                    className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/**Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center"> 
                            <span className="text-xl font-bold text-white tracking-wider flex justify-center w-[280px]">
                                Balance-Sheet using HTML & CSS
                            </span>

                            <div className="w-[300px] flex justify-center">
                                <a href="https://grewal009.github.io/Balance-Sheet/" target="_blank"><button className="text-center rounded-lg px-3 py-1 m-2 bg-white text-gray-280 font-bold text-lg outline outline-offset-2 outline-2 hover:text-gray-600 ">Demo</button></a>
                                <a href="https://github.com/Grewal009/Balance-Sheet" target="_blank"><button className="text-center rounded-lg px-3 py-1 m-2 bg-white text-gray-300 font-bold text-lg outline outline-offset-2 outline-2 hover:text-gray-600 ">Code</button></a>
                            </div>
                            
                        </div>
                    </div>


                    <div 
                    style={{backgroundImage: `url(${cityskyline})`}} 
                    className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/**Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center"> 
                            <span className="text-xl font-bold text-white tracking-wider flex justify-center w-[280px]">
                                City-Skyline using HTML & CSS
                            </span>

                            <div className="w-[300px] flex justify-center">
                                <a href="https://grewal009.github.io/City-Skyline/" target="_blank"><button className="text-center rounded-lg px-3 py-1 m-2 bg-white text-gray-280 font-bold text-lg outline outline-offset-2 outline-2 hover:text-gray-600 ">Demo</button></a>
                                <a href="https://github.com/Grewal009/City-Skyline" target="_blank"><button className="text-center rounded-lg px-3 py-1 m-2 bg-white text-gray-300 font-bold text-lg outline outline-offset-2 outline-2 hover:text-gray-600 ">Code</button></a>
                            </div>
                            
                        </div>
                    </div>


                    <div 
                    style={{backgroundImage: `url(${magazine})`}} 
                    className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/**Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center"> 
                            <span className="text-xl font-bold text-white tracking-wider flex justify-center w-[280px]">
                                Magazine using HTML & CSS(Flexbox)
                            </span>

                            <div className="w-[300px] flex justify-center">
                                <a href="https://grewal009.github.io/Magazine/" target="_blank"><button className="text-center rounded-lg px-3 py-1 m-2 bg-white text-gray-280 font-bold text-lg outline outline-offset-2 outline-2 hover:text-gray-600 ">Demo</button></a>
                                <a href="https://github.com/Grewal009/Magazine"  target="_blank"><button className="text-center rounded-lg px-3 py-1 m-2 bg-white text-gray-300 font-bold text-lg outline outline-offset-2 outline-2 hover:text-gray-600 ">Code</button></a>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Work;