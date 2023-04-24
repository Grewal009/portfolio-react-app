
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwindcss from "../assets/tailwind.png";
import gitgub from "../assets/github.png";


const Skills = () => {
    return(
        <div name="skills" className="bg-[#08192f] text-gray-300 w-full h-screen">
            {/**Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full lg:pl-20">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
                    <p className="py-4">These are the technologies, I have worked with.</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8"> 
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={html} alt="html-icon"/>
                        <p>HTML</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={css} alt="css-icon"/>
                        <p>CSS</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={javascript} alt="javascript-icon"/>
                        <p>Javascript</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={tailwindcss} alt="tailwindcss-icon"/>
                        <p>Tailwind CSS</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={react} alt="react-icon"/>
                        <p>React</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={gitgub} alt="github-icon"/>
                        <p>Github</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Skills;