import Input from "../components/Input"
import { useState } from "react";
const ContactPage = () => {


    const [message, setMessage] = useState("");
    const maxWords = 40;

    const handleMessageChange = (e) => {
        const value = e.target.value;
        const wordCount = value.trim().split(/\s+/).length;

        if (value.trim() === "" || wordCount <= maxWords) {
            setMessage(value);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row white lg:gap-48 gap-6 p-6 lg:p-12 primary-text">
            <div className="flex flex-col gap-4 mt-24 ">
            <h1 className="flex items-center justify-center text-4xl font-bold">Contact Us</h1>
            <p className=" flex lg:w-96">Submit your queries here. Our customer care rep will get back to you as soon as possible. </p>
            </div>
            
            <div className="items-center justify-center">
                <h2 className="text-lg font-bold justify-center p-6">SEND US A MESSAGE</h2>
                <div className="flex ">
                <div className="flex  gap-8">
                    <div className="space-y-6  w-28 text-left">
                        <h4>Name:</h4>
                        <h4>Email:</h4>
                        <h4>Phone Number:</h4>
                        <h4>Message:</h4>
                    </div>
                    <div  className="space-y-4">
                    <Input text="Enter your name..." type="text"/>
                    <Input text="Johndoe@gmail.com" type="email"/>
                    <Input text="+2348012345678" type="number"/>
                    <textarea value={message}   onChange={handleMessageChange} name="Enter Message" id="" className="rounded lg:w-96 w-52 h-20 tertiary-color"></textarea>
                    </div>
                </div>
                </div>
                <div className="flex lg:ml-48 ml-24 p-4">
                        <button className="primary-color w-36 h-12 rounded">Submit</button>
                    </div>
            </div>
        </div>
    )
};


export default ContactPage;