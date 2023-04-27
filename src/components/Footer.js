
import {BsFillSuitHeartFill} from "react-icons/bs"

const Footer = () => {
    return(
        <div className="w-full h-16 bg-[#0a192f] text-gray-300 border-t-2 border-gray-300 flex justify-center" >
            <p className="flex items-center m-3">Made with &nbsp;<span className="text-pink-600"><BsFillSuitHeartFill /></span>&nbsp; in Oslo</p>

        </div>
    )
}

export default Footer;