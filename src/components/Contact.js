

const Contact = () => {
    return(
        <div className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
            <form method="POST" action="https://getform.io/f/a239643e-8c01-45c3-8a3e-e182456abb0e"  className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 ">Contact</p>
                    <p className="text-gray-300 py-4">Submit the form below or send me an email - aneel.grewal@hotmail.com</p>
                </div>
                <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name"/>
                <input className="bg-[#ccd6f6] my-4 p-2" type="email" placeholder="Email" name="email"/>
                <textarea className="bg-[#ccd6f6] p-2" rows="10" placeholder="Message" name="message"/>
                <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let´s Collaborate</button>

            </form>
            
        </div>
    )
}

export default Contact;