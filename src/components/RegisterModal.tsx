import { useState, FormEvent } from "react";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
import apple from "../assets/apple.svg";

interface RegisterProps {
    setIsRegisterOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsVerificationOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RegisterModal: React.FC<RegisterProps> = ({ setIsRegisterOpen, setIsModalOpen, setIsVerificationOpen }) => {
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const form = e.target as HTMLFormElement;
        const username = (form.username as HTMLInputElement).value.trim();
        const email = (form.email as HTMLInputElement).value.trim();
        const password = (form.password as HTMLInputElement).value.trim();
        const isChecked = (form.terms as HTMLInputElement).checked;

        if (username && email && password.length >= 8 && isChecked) {
            setIsRegisterOpen(false);
            setIsVerificationOpen(true);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
            <div className="bg-white p-10 shadow-lg relative rounded-[32px]">
                <p className="text-2xl text-[#171717] font-semibold">Create an account</p>
                <p className="text-[#0F0F0F] mt-3">
                    Already have an account?{" "}
                    <button
                        onClick={() => {
                            setIsRegisterOpen(false);
                            setIsModalOpen(true);
                        }}
                        className="underline text-[#1749B3]"
                    >
                        Sign in
                    </button>
                </p>
                <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-8">
                    <div className="flex flex-col gap-2.5">
                        <p className="text-lg text-[#1B1B29]">User name</p>
                        <input type="text" name="username" className="pl-6 py-3.5 rounded-xl outline-none bg-[#F1F4F8] w-[460px]" placeholder="Enter your name" required />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <p className="text-lg text-[#1B1B29]">Email Address</p>
                        <input 
                            type="email" 
                            name="email" 
                            className="pl-6 py-3.5 rounded-xl outline-none bg-[#F1F4F8] w-[460px]" 
                            placeholder="Enter your e-mail" 
                            required 
                            value={email} 
                            onChange={handleEmailChange} 
                        />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <p className="text-[#1B1B29]">Password</p>
                        <div className="relative w-[460px]">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
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
                                <i className={`fa-regular text-[#1749B3] ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <input type="radio" name="terms" className="w-4 h-4 mt-1.5" required />
                        <p className="text-[15px] text-[#171717]">
                            By creating an account you agree to our <span className="text-[#1749B3]">Privacy Policy</span> <br />
                            and <span className="text-[#1749B3]">Terms of Service.</span>
                        </p>
                    </div>
                    <button type="submit" className="bg-[#1749B3] rounded-xl cursor-pointer text-white font-bold py-4 w-full">
                        Log in
                    </button>
                </form>
                <div className="flex items-center mt-10">
                    <div className="flex-grow h-px bg-[#DFDFDF]"></div>
                    <span className="px-3 text-[#909090]">Or sign in with</span>
                    <div className="flex-grow h-px bg-[#DFDFDF]"></div>
                </div>
                <div className="flex w-full justify-between gap-2 mt-6">
                    <button
                        className="flex flex-grow border border-[#DFDFDF] rounded-xl justify-center items-center cursor-pointer"
                        onClick={() => setIsRegisterOpen(false)}
                    >
                        <img src={google} alt="Google" className="py-5" />
                    </button>
                    <button 
                        className="flex flex-grow border border-[#DFDFDF] rounded-xl justify-center items-center cursor-pointer"
                        onClick={() => setIsRegisterOpen(false)}
                    >
                        <img src={facebook} alt="Facebook" className="py-5" />
                    </button>
                    <button 
                        className="flex flex-grow border border-[#DFDFDF] rounded-xl justify-center items-center cursor-pointer"
                        onClick={() => setIsRegisterOpen(false)}
                    >
                        <img src={apple} alt="Apple" className="py-5" />
                    </button>
                </div>
                <button 
                    onClick={() => setIsRegisterOpen(false)} 
                    className="absolute top-6 right-6 bg-[#1717171A] text-[#3A3A3C] hover:text-[#262628] px-3.5 py-2 rounded-full"
                >
                    <i className="fa-solid fa-x"></i>
                </button>
            </div>
        </div>
    )
};
