import { useState, useRef, useEffect } from "react";
import WriteEmogi from "../assets/write.png";
const Post = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    }, [])
    return (
        <div id="post" className="w-full my-4 md:my-8 shadow-xl rounded-lg">
            <img className="object-cover h-64 w-full md:rounded-lg" src="https://images.unsplash.com/photo-1482440308425-276ad0f28b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="px-4 py-3 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <img height={30} width={30} src={WriteEmogi} alt="" />
                    <p className="font-semibold">Artice</p>
                </div>
                <div className="flex justify-between">
                    <h1 className="font-bold text-lg md:text-xl mr-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <div>
                        <button className="hover:bg-slate-200 rounded-md" onClick={() => { setOpen((prev) => !prev) }}>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.6667 14C18.6667 15.2833 19.7167 16.3333 21 16.3333C22.2834 16.3333 23.3334 15.2833 23.3334 14C23.3334 12.7166 22.2834 11.6666 21 11.6666C19.7167 11.6666 18.6667 12.7166 18.6667 14ZM16.3334 14C16.3334 12.7166 15.2834 11.6666 14 11.6666C12.7167 11.6666 11.6667 12.7166 11.6667 14C11.6667 15.2833 12.7167 16.3333 14 16.3333C15.2834 16.3333 16.3334 15.2833 16.3334 14ZM9.33337 14C9.33337 12.7166 8.28337 11.6666 7.00004 11.6666C5.71671 11.6666 4.66671 12.7166 4.66671 14C4.66671 15.2833 5.71671 16.3333 7.00004 16.3333C8.28337 16.3333 9.33337 15.2833 9.33337 14Z" fill="black" />
                            </svg>
                        </button>
                        
                        <div className="absolute">

                            <div className={open ? "absolute shadow-lg p-3 flex flex-col gap-1 bg-white right-[-28px]" : "hidden"} ref={menuRef}>
                                <a href="#" className="hover:bg-slate-300 px-2 rounded-sm hover:border-b-2 hover:border-black">Edit</a>
                                <a href="#" className="hover:bg-slate-300 px-2 rounded-sm hover:border-b-2 hover:border-black">Report</a>
                            </div>
                        </div>
                    </div>

                </div>
                <p className="text-sm md:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloremque deserunt beatae alias placeat itaque pariatur, modi voluptatem exercitationem distinctio veniam natus aliquid ipsam voluptates, cum suscipit nihil dolorum fugit.
                </p>
                <div className="flex justify-between my-3">
                    <div className="flex justify-between items-center gap-4">
                        <div className="rounded-full bg-black w-10 h-10"></div>
                        John Doe
                    </div>
                    <div className="flex gap-8 items-center">
                        <p>1k views</p>
                        <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="42" height="36" rx="2" fill="#EDEEF0" />
                            <g clipPath="url(#clip0_1_966)">
                                <path d="M25.5 21.06C24.93 21.06 24.42 21.285 24.03 21.6375L18.6825 18.525C18.72 18.3525 18.75 18.18 18.75 18C18.75 17.82 18.72 17.6475 18.6825 17.475L23.97 14.3925C24.375 14.7675 24.9075 15 25.5 15C26.745 15 27.75 13.995 27.75 12.75C27.75 11.505 26.745 10.5 25.5 10.5C24.255 10.5 23.25 11.505 23.25 12.75C23.25 12.93 23.28 13.1025 23.3175 13.275L18.03 16.3575C17.625 15.9825 17.0925 15.75 16.5 15.75C15.255 15.75 14.25 16.755 14.25 18C14.25 19.245 15.255 20.25 16.5 20.25C17.0925 20.25 17.625 20.0175 18.03 19.6425L23.37 22.7625C23.3325 22.92 23.31 23.085 23.31 23.25C23.31 24.4575 24.2925 25.44 25.5 25.44C26.7075 25.44 27.69 24.4575 27.69 23.25C27.69 22.0425 26.7075 21.06 25.5 21.06Z" fill="#2D2D2D" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_966">
                                    <rect width="18" height="18" fill="white" transform="translate(12 9)" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post;