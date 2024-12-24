import Main from './Main';
import SignupModal from "./SignupModal";
import { useState } from "react";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const onClose = () =>{
        setOpen(false);
    }
    return (
        <div className="w-full mt-4 flex justify-center items-center">
            <div className="w-[100%] md:w-[80%]">
                <div className="flex md:hidden justify-between items-center mx-4">
                    <p className="font-bold">Posts(123)</p>
                    <button className="py-2 px-4 bg-slate-300 rounded-md font-semibold">Filter:All</button>
                </div>
                <div className="hidden md:flex items-center justify-between mb-2">
                    <div className="flex gap-4 md:text-sm lg:text-base">
                        <a href="#" className="border-b-2 border-black p-2">All Posts</a>
                        <a href="#" className="p-2">Article</a>
                        <a href="#" className="p-2">Events</a>
                        <a href="#" className="p-2">Education</a>
                        <a href="#" className="p-2">Jobs</a>
                    </div>
                    <div className="flex gap-4">
                        <button className="p-2 bg-[#EDEEF0] rounded-md md:text-sm lg:text-base font-semibold">Write a Post
                            <svg width="22" height="22" className="inline" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_839)">
                                    <path d="M6.41663 9.16663L11 13.75L15.5833 9.16663H6.41663Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_839">
                                        <rect width="22" height="22" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <button className="py-2 px-5 bg-[#2F6CE5] rounded-md md:text-sm lg:text-base font-semibold text-white" onClick={()=>setOpen(true)}>Join Group</button>
                        <SignupModal open={open} onClose={onClose}/>
                    </div>
                </div>
                <Main />
            </div>
        </div>
    )
}

export default Navbar;