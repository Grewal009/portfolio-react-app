import working from "../assets/projects/workImg.jpeg";

const Work = () => {
    return(
        <div name="work" className="bg-[#08192f] w-full md:h-screen text-gray-300">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full lg:pl-20">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
                    <p className="py-4">Check out some of my recent work.</p>
                </div>

                {/**Container */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">

                    {/**Grid item */}
                    <div 
                    style={{backgroundImage: `url(${working})`}} 
                    className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/**Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100"> 
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application
                            </span>

                            <div>
                                <a href=""><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg">Demo</button></a>
                                <a href=""><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg">Code</button></a>
                            </div>
                            
                        </div>
                    </div>

                    <div 
                    style={{backgroundImage: `url(${working})`}} 
                    className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/**Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100"> 
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application
                            </span>

                            <div>
                                <a href=""><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg">Demo</button></a>
                                <a href=""><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg">Code</button></a>
                            </div>
                            
                        </div>
                    </div>


                    <div 
                    style={{backgroundImage: `url(${working})`}} 
                    className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/**Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100"> 
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application
                            </span>

                            <div>
                                <a href=""><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg">Demo</button></a>
                                <a href=""><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg">Code</button></a>
                            </div>
                            
                        </div>
                    </div>


                    <div 
                    style={{backgroundImage: `url(${working})`}} 
                    className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/**Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100"> 
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application
                            </span>

                            <div>
                                <a href=""><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg">Demo</button></a>
                                <a href=""><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg">Code</button></a>
                            </div>
                            
                        </div>
                    </div>


                    <div 
                    style={{backgroundImage: `url(${working})`}} 
                    className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/**Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100"> 
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS Application
                            </span>

                            <div>
                                <a href=""><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg">Demo</button></a>
                                <a href=""><button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg">Code</button></a>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Work;