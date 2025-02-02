import { useState } from "react";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
import apple from "../assets/apple.svg";

interface LoginProps {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isRegisterOpen: boolean;
    setIsRegisterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginModal: React.FC<LoginProps> = ({ setIsModalOpen, isRegisterOpen, setIsRegisterOpen }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
            <div className="bg-white p-10 rounded-[32px] shadow-lg relative">
                <p className="text-2xl mb-3 font-bold">Log in</p>
                <p className="text-[#0F0F0F]">
                    New user?{" "}
                    <button
                        onClick={() => {
                            setIsModalOpen(false);
                            setIsRegisterOpen(true);
                        }}
                        className="underline text-[#1749B3]"
                    >
                        Create an account
                    </button>
                </p>
                <form action="" className="mt-10 flex flex-col gap-8">
                    <div className="flex flex-col gap-2.5">
                        <p className="text-lg text-[#1B1B29]">Email Adress</p>
                        <input
                            type="email"
                            className="pl-6 py-3.5 rounded-xl outline-none bg-[#F1F4F8] w-[460px]"
                            placeholder="Enter your e-mail"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <p className="text-[#1B1B29]">Password</p>
                        <div className="relative w-[460px]">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="pl-6 pr-12 py-3.5 rounded-xl outline-none bg-[#F1F4F8] w-full"
                                placeholder="********"
                                required
                                minLength={8}
                            />
                            <button
                                type="button"
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <i
                                    className={`fa-regular text-[#1749B3] ${
                                        showPassword ? "fa-eye-slash" : "fa-eye"
                                    }`}
                                ></i>
                            </button>
                        </div>
                    </div>
                    <div className="flex w-full justify-between items-center mt-10">
                        <button
                            type="button"
                            className="text-[#0F0F0F] font-semibold"
                        >
                            Forgot password?
                        </button>
                        <button
                            type="submit"
                            className="bg-[#1749B3] rounded-xl cursor-pointer text-white font-bold px-18 py-4"
                        >
                            Log in
                        </button>
                    </div>
                </form>
                <div className="flex items-center mt-10">
                    <div className="flex-grow h-px bg-[#DFDFDF]"></div>
                    <span className="px-3 text-[#909090]">Or sign in with</span>
                    <div className="flex-grow h-px bg-[#DFDFDF]"></div>
                </div>
                <div className="flex w-full justify-between gap-2 mt-6">
                    <button
                        className="flex flex-grow border border-[#DFDFDF] rounded-xl justify-center items-center cursor-pointer"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <img src={google} alt="Google" className="py-5" />
                    </button>
                    <button
                        className="flex flex-grow border border-[#DFDFDF] rounded-xl justify-center items-center cursor-pointer"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <img src={facebook} alt="Facebook" className="py-5" />
                    </button>
                    <button
                        className="flex flex-grow border border-[#DFDFDF] rounded-xl justify-center items-center cursor-pointer"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <img src={apple} alt="Apple" className="py-5" />
                    </button>
                </div>
                <p className="text-[#8F8F8F] mt-8">
                    Protected by reCAPTCHA and subject to the Google{" "}
                    <span className="text-[#1749B3]">Privacy <br />Policy</span> and{" "}
                    <span className="text-[#171717]">Terms of Service</span>.
                </p>
                <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-6 right-6 bg-[#1717171A] text-[#3A3A3C] hover:text-[#262628] px-3.5 py-2 rounded-full"
                >
                    <i className="fa-solid fa-x"></i>
                </button>
            </div>
        </div>
    );
};
