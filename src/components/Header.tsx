import { useState } from "react";
import { LoginModal } from "./modals/LoginModal";
import { RegisterModal } from "./modals/RegisterModal";
import { VerificationModal } from "./modals/VerificationModal";
import { SuccessModal } from "./modals/SuccessModal";
import { ForgetModal } from "./modals/ForgetModal";
import { ForgetVerifyModal } from "./modals/ForgetVerifyModal";
import { NewPasswordModal } from "./modals/NewPasswordModal";
import logo from "../assets/logo.svg";
export const Home: React.FC = () => {
    const [isSubscriptionsOpen, setIsSubscriptionsOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("EN");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isVerificationOpen, setIsVerificationOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [isSuccessfulOpen, setIsSuccessfulOpen] = useState(false);
    const [isForgetOpen, setIsForgetOpen] = useState(false);
    const [isForgetVerify, setIsForgetVerify] = useState(false);
    const [isNewPassword, setIsNewPassword] = useState(false);
    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language);
        setIsLanguageOpen(false);
    };

    return (
        <header className="max-w-screen-xl m-auto px-0 sm:px-6 lg:px-0">
            <nav className="bg-white flex justify-between items-center relative z-50 sm:z-1 sm:shadow-none shadow-[0px_4px_4px_0px_#E3E3E333] px-6 py-3 lg:py-0.5">
                <div className="flex gap-2">
                    <a href="#" className="flex gap-2 items-center font-semibold text-[#171717] logo__text">
                        <img src={logo} alt="logo" className="w-8 h-8 lg:w-full lg:h-full" />
                        <span className="hidden sm:inline">DiscountsOnServices</span>
                    </a>
                </div>
                <div className="nav__btns lg:block hidden">
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
                    <div className="flex gap-3.5 lg:flex hidden">
                        <i className="fa-brands fa-whatsapp text-[#333] text-2xl"></i>
                        <i className="fa-brands fa-telegram text-[#333] text-2xl"></i>
                    </div>
                    <ul className="flex gap-12 lg:block hidden">
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
                        className="bg-[#1749B3] rounded-xl cursor-pointer text-white font-bold px-10 py-2.5 lg:block hidden"
                    >
                        <span className="">Log in</span>
                    </button>
                    <button 
                        className="text-2xl text-[#070033] lg:hidden focus:outline-none"
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
            </nav>
            {isModalOpen && 
                <LoginModal 
                    setIsModalOpen={setIsModalOpen} 
                    setIsRegisterOpen={setIsRegisterOpen}
                    setIsForgetOpen={setIsForgetOpen}
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
            {isForgetOpen && 
                <ForgetModal 
                    setIsForgetOpen={setIsForgetOpen}
                    setIsForgetVerify={setIsForgetVerify}
                />
            }
            {isForgetVerify && 
                <ForgetVerifyModal 
                    setIsForgetVerify={setIsForgetVerify} 
                    setIsNewPassword={setIsNewPassword}
                />
            }
            {isNewPassword &&
                <NewPasswordModal
                    setIsNewPassword={setIsNewPassword}
                />
            }
        </header>
    );
};