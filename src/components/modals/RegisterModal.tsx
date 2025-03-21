import { useState, FormEvent } from "react";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import apple from "../../assets/apple.svg";

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
        <div className="fixed inset-0 flex items-center justify-center sm:backdrop-blur-sm z-40">
            <div className="bg-white pb-0 sm:pb-10 px-6 sm:px-10 pt-12 sm:pt-10 rounded-none sm:rounded-[32px] shadow-none sm:shadow-lg relative w-full max-w-full sm:max-w-[480px] lg:max-w-[560px] max-h-screen sm:h-auto flex flex-col overflow-y-auto mt-[10vh] sm:mt-0">
                <p className="text-2xl lg:text-3xl mb-3 font-bold">Create an account</p>
                <p className="text-[#0F0F0F]">
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
                <form onSubmit={handleSubmit} className="mt-10 lg:mt-10 sm:mt-9 flex flex-col gap-6 lg:gap-8">
                    <div className="flex flex-col gap-2.5">
                        <p className="text-sm lg:text-lg text-[#1B1B29]">User name</p>
                        <input type="text" name="username" className="pl-6 py-3.5 text-sm lg:text-lg rounded-xl outline-none bg-[#F1F4F8] w-full" placeholder="Enter your name" required />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <p className="text-sm lg:text-lg text-[#1B1B29]">Email Address</p>
                        <input 
                            type="email" 
                            name="email" 
                            className="pl-6 py-3.5 text-sm lg:text-lg rounded-xl outline-none bg-[#F1F4F8] w-full" 
                            placeholder="Enter your e-mail" 
                            required 
                            value={email} 
                            onChange={handleEmailChange} 
                        />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <p className="text-sm lg:text-lg text-[#1B1B29]">Password</p>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                className="pl-6 pr-12 py-3.5 text-sm lg:text-lg rounded-xl outline-none bg-[#F1F4F8] w-full"
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
                    <button type="submit" className="bg-[#1749B3] rounded-xl cursor-pointer text-white font-bold px-18 py-4 w-full sm:w-auto">
                        Sign up
                    </button>
                </form>
                <div className="flex items-center mt-10 lg:mt-10 sm:mt-9">
                    <div className="flex-grow h-px bg-[#DFDFDF]"></div>
                    <span className="px-3 text-[#909090]">Or sign in with</span>
                    <div className="flex-grow h-px bg-[#DFDFDF]"></div>
                </div>
                <div className="flex w-full gap-2 mt-6">
                    <button className="flex flex-grow border border-[#DFDFDF] rounded-xl justify-center items-center cursor-pointer h-12 sm:h-14 lg:h-[70px]" onClick={() => setIsRegisterOpen(false)}>
                        <img src={google} alt="Google" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain" />
                    </button>
                    <button className="flex flex-grow border border-[#DFDFDF] rounded-xl justify-center items-center cursor-pointer h-12 sm:h-14 lg:h-[70px]" onClick={() => setIsRegisterOpen(false)}>
                        <img src={facebook} alt="Facebook" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain" />
                    </button>
                    <button className="flex flex-grow border border-[#DFDFDF] rounded-xl justify-center items-center cursor-pointer h-12 sm:h-14 lg:h-[70px]" onClick={() => setIsRegisterOpen(false)}>
                        <img src={apple} alt="Apple" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain" />
                    </button>
                </div>
                <button 
                    onClick={() => setIsRegisterOpen(false)} 
                    className="absolute top-6 right-6 bg-[#1717171A] text-[#3A3A3C] hover:text-[#262628] px-3.5 py-2 rounded-full hidden sm:block"
                >
                    <i className="fa-solid fa-x"></i>
                </button>
            </div>
        </div>
    )
};
