import { useState, FormEvent } from "react";
import { LoginModal } from "./LoginModal";
import { RegisterModal } from "./RegisterModal";
import { VerificationModal } from "./VerificationModal";
import { SuccessModal } from "./SuccessModal";
import logo from "../assets/logo.svg";

export const Home: React.FC = () => {
    const [isSubscriptionsOpen, setIsSubscriptionsOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("EN");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
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
                    {isRegisterOpen && 
                        <RegisterModal
                            setIsRegisterOpen={setIsRegisterOpen}
                            setIsModalOpen={setIsModalOpen}
                            setIsVerificationOpen={setIsVerificationOpen}
                        />
                    }
                    {isVerificationOpen && 
                        <VerificationModal
                            email={email}
                            setIsVerificationOpen={setIsVerificationOpen}
                            setIsSuccessfulOpen={setIsSuccessfulOpen}
                        />
                    }
                    {isSuccessfulOpen && <SuccessModal setIsSuccessfulOpen={setIsSuccessfulOpen} />}
                </div>
            </nav>
        </header>
    );
};