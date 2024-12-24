import SignUpPic from "../assets/signup.jpg";
import GoogleIcon from "../assets/google.png";
import FacebookIcon from "../assets/facebook.png";
import { useState } from "react";

const SignupModal = ({open, onClose}) => {
    const [signin, setSignin] = useState(false);
    if(!open) return null;
    return (
        <>
            <div className="w-screen h-screen bg-black opacity-50 fixed top-0 left-0"></div>
            <div className="h-7 w-7 rounded-full fixed top-[4%] right-[12%] cursor-pointer" onClick={onClose}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg></div>
            <div className="z-10 fixed -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] w-[70%] h-[85%] shadow-xl bg-white rounded-xl">
                <div className="h-[10%] flex justify-center items-center bg-lime-100 rounded-lg">
                    <p className="text-center p-2 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, voluptate!</p>
                </div>
                <div className="flex justify-around w-full h-[90%]">

                    <div className="p-4 w-1/2 flex flex-col justify-center items-center">
                        <div className="flex flex-col gap-6 ">
                            <h1 className="text-center text-2xl font-bold">{!signin?"Create Account":"Sign In"}</h1>
                            <div className="flex flex-col bg-slate-400 rounded-md">
                                {!signin && <div className="flex justify-center items-center">
                                    <input className="p-2 bg-slate-200 mx-[4px] mt-[4px] w-[48%]" type="text" placeholder="First Name" />
                                    <input className="p-2 bg-slate-200 mr-[4px] mt-[4px] w-[48%]" type="text" placeholder="Last Name" />
                                </div>}
                                <input className="p-2 bg-slate-200 m-[4px]" type="email" placeholder="Email" />
                                <input className={!signin?"p-2 bg-slate-200 mx-[4px]": "p-2 bg-slate-200 mx-[4px] mb-[4px]"} type="password" placeholder="Password" />
                                {!signin && <input className="p-2 bg-slate-200 m-[4px]" type="password" placeholder="Confirm Password" />}
                            </div>
                            <button className="p-4 bg-blue-500 rounded-full text-white font-semibold hover:bg-blue-400">{signin?"Sign In":"Create Account"}</button>
                            <div>
                                <button className="p-4 border-2 border-slate-200 w-full rounded-md hover:bg-slate-100"><img height={25} width={25} className="inline mr-2" src={GoogleIcon} alt="google icon" />{signin?"Sign In":"Sign Up"} with Google</button>
                                <button className="p-4 border-2 border-slate-200 w-full rounded-md mt-2 hover:bg-slate-100"><img height={25} width={25} className="inline mr-2" src={FacebookIcon} alt="facebook icon" />{signin?"Sign In":"Sign Up"} with Facebook</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 h-full flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-around items-center">
                            <h1>{!signin?"Already have an account?":"Don't have an account?"} <span className="text-blue-900 cursor-pointer" onClick={()=>setSignin((prev)=>!prev)}>{!signin?"Sign In":"Sign Up"}</span></h1>
                        <img src={SignUpPic} className="object-fit h-[80%] w-[80%]"  alt="sign up" />
                        <h1 className="w-[80%] text-center text-sm">{!signin?"By signing up":"By signing in"}, you agree to our Terms & Conditions, Privacy Policy</h1>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SignupModal;