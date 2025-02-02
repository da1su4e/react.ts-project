import { useState, FormEvent } from "react";
import { LoginModal } from "./LoginModal";
import logo from "../assets/logo.svg";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
import apple from "../assets/apple.svg";

export const Home: React.FC = () => {
    const [isSubscriptionsOpen, setIsSubscriptionsOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("EN");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isVerificationOpen, setIsVerificationOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [timer, setTimer] = useState(30);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [isSuccessfulOpen, setIsSuccessfulOpen] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language);
        setIsLanguageOpen(false);
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

    const handleCodeChange = (e) => {
        const inputCode = e.target.value;
        if (inputCode.length <= 4) {
            setCode(inputCode);
        }
    };

    const handleVerifySubmit = (e) => {
        e.preventDefault();
        if (code.length === 4) {
            setIsVerificationOpen(false);
            setIsSuccessfulOpen(true);
        }
    };

    const resendCode = () => {
        if (!isTimerRunning) {
            setIsTimerRunning(true);
            setTimer(30);
            const interval = setInterval(() => {
                setTimer((prev) => {
                    if (prev === 1) {
                        clearInterval(interval);
                        setIsTimerRunning(false);
                    }
                    return prev - 1;
                });
            }, 1000);
        }
    };


    return (
        <header className="max-w-screen-xl m-auto pt-0.5 pb-0.5">
            <nav className="flex justify-between items-center relative">
                <div className="flex gap-2">
                    <a href="#" className="flex gap-2 items-center font-semibold text-[#171717] logo__text">
                        <img src={logo} alt="logo" />DiscountsOnServices
                    </a>
                </div>
                <div className="nav__btns">
                    <ul className="flex gap-12">
                        <li className="relative text-[#333]">
                            <button 
                                onClick={() => setIsSubscriptionsOpen(!isSubscriptionsOpen)} 
                                className="flex items-center gap-3 cursor-pointer hover:text-[#1749B3] duration-300"
                            >
                                Subscriptions 
                                <i className={`fa-solid fa-chevron-down text-[#333] text-xs transition-transform duration-300 ${
                                    isSubscriptionsOpen ? "rotate-180" : "rotate-0"
                                }`}></i>
                            </button>
                            <ul className={`min-w-max mt-6 shadow-[0px_20px_48px_0px_#B1B1B166] p-6 rounded-xl absolute z-50 bg-white transition-all duration-300 ${
                                isSubscriptionsOpen ? "flex flex-col left-[-23px]" : "hidden"
                            }`}>
                                <li><a href="#">Netflix</a></li>
                                <li><a href="#">YouTube Premium</a></li>
                                <li><a href="#">Spotify</a></li>
                            </ul>
                        </li>
                        <li className="text-[#333] cursor-pointer hover:text-[#1749B3] duration-300">FAQ</li>
                        <li className="text-[#333] cursor-pointer hover:text-[#1749B3] duration-300">Support</li>
                        <li className="text-[#333] cursor-pointer hover:text-[#1749B3] duration-300">About</li>
                    </ul>
                </div>
                <div className="flex gap-10 items-center">
                    <div className="flex gap-4">
                        <i className="fa-brands fa-whatsapp text-[#333] text-2xl"></i>
                        <i className="fa-brands fa-telegram text-[#333] text-2xl"></i>
                    </div>
                    <ul className="flex gap-12">
                        <li className="relative text-[#333]">
                            <button 
                                onClick={() => setIsLanguageOpen(!isLanguageOpen)} 
                                className="flex items-center gap-1 cursor-pointer hover:text-[#1749B3] duration-300 font-semibold"
                            >
                                {selectedLanguage}
                                <i className={`fa-solid fa-chevron-down text-[#333] text-xs transition-transform duration-300 ${
                                    isLanguageOpen ? "rotate-180" : "rotate-0"
                                }`}></i>
                            </button>
                            <ul className={`min-w-max mt-6 shadow-[0px_20px_48px_0px_#B1B1B166] p-6 rounded-xl absolute z-50 bg-white transition-all duration-300 ${
                                isLanguageOpen ? "flex flex-col left-[-23px]" : "hidden"
                            }`}>
                                <li><button onClick={() => handleLanguageChange("EN")}>English</button></li>
                                <li><button onClick={() => handleLanguageChange("UA")}>Ukraine</button></li>
                                <li><button onClick={() => handleLanguageChange("RU")}>Russian</button></li>
                            </ul>
                        </li>
                    </ul>
                    <button 
                        onClick={() => setIsModalOpen(true)} 
                        className="bg-[#1749B3] rounded-xl cursor-pointer text-white font-bold px-10 py-2.5"
                    >
                        <span className="">Log in</span>
                    </button>
                    {isModalOpen && 
                        <LoginModal 
                            setIsModalOpen={setIsModalOpen} 
                            isRegisterOpen={isRegisterOpen} 
                            setIsRegisterOpen={setIsRegisterOpen} 
                        />}
                    {isRegisterOpen && (
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
                    )}
                    {isVerificationOpen && (
                        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
                            <div className="bg-white p-10 shadow-lg relative rounded-[32px]">
                                <p className="text-2xl text-[#171717] font-semibold">Email verification</p>
                                <p className="text-[#000000] mt-3">
                                    Please enter the 6-digit verification code that was sent to <br />
                                    {email || "name@gmail.com"}
                                    . The code is valid for 30 minutes.
                                </p>
                                <form onSubmit={handleVerifySubmit} className="flex flex-col mt-10">
                                    <div className="flex flex-col gap-2.5">
                                        <p className="text-lg text-[#1B1B29]">Email verification code</p>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                className="pl-6 pr-24 py-3.5 rounded-xl outline-none bg-[#F1F4F8] w-[460px]"
                                                placeholder="XXXX"
                                                required
                                                value={code}
                                                onChange={handleCodeChange}
                                                maxLength={4}
                                                inputMode="numeric"
                                            />
                                            <button
                                                type="button"
                                                onClick={resendCode}
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#1749B3] font-semibold pr-6"
                                                disabled={isTimerRunning}
                                            >
                                                {isTimerRunning ? `${timer}s` : "Resend code"}
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-[#1749B3] rounded-xl cursor-pointer text-white font-bold py-4 w-full mt-10"
                                        disabled={code.length !== 4}
                                    >
                                        Sign up
                                    </button>
                                </form>
                                <p className="font-bold text-[#1749B3] text-lg mt-7">Didn’t receive the code?</p>
                                <button 
                                    onClick={() => setIsRegisterOpen(false)} 
                                    className="absolute top-6 right-6 bg-[#1717171A] text-[#3A3A3C] hover:text-[#262628] px-3.5 py-2 rounded-full"
                                >
                                    <i className="fa-solid fa-x"></i>
                                </button>
                            </div>
                        </div>
                    )}
                    {isSuccessfulOpen && (
                        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
                            <div className="bg-white p-30 shadow-lg relative rounded-[32px]">
                                <p className="text-2xl text-[#171717] font-semibold">Successful registration</p>
                                <p className="text-[#000000] mt-3">
                                By optimizing our work and using internal tools, we were <br /> able to lower the prices while keeping the highest <br /> possible.
                                </p>
                                <button
                                    onClick={() => setIsSuccessfulOpen(false)} 
                                    className="bg-[#1749B3] rounded-xl cursor-pointer text-white font-bold py-4 w-full mt-10"
                                >
                                    Continue work
                                </button>
                                <button 
                                    onClick={() => setIsSuccessfulOpen(false)} 
                                    className="absolute top-6 right-6 bg-[#1717171A] text-[#3A3A3C] hover:text-[#262628] px-3.5 py-2 rounded-full"
                                >
                                    <i className="fa-solid fa-x"></i>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};