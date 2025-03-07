import { useState, FormEvent } from "react";

const phoneRegex = /^\+?\d{10,15}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface SubProps {
    setIsSubOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsPurchaseOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SubModal: React.FC<SubProps> = ({ setIsSubOpen, setIsPurchaseOpen }) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        setIsEmailValid(emailRegex.test(value)); // Перевірка валідності email
    };

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPhone(value);
        setIsPhoneValid(phoneRegex.test(value)); // Перевірка валідності номера телефону
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!username.trim() || !email.trim() || !phone.trim() || !isPhoneValid || !isEmailValid) {
            return; // Не відправляємо форму, якщо хоч одне поле порожнє або некоректне
        }

        setIsSubOpen(false);
        setIsPurchaseOpen(true);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center sm:backdrop-blur-sm z-40">
            <div className="bg-white pb-0 sm:pb-10 px-6 sm:px-10 pt-12 sm:pt-10 lg:pt-15 rounded-none sm:rounded-[32px] shadow-none sm:shadow-lg relative w-full max-w-full sm:max-w-[480px] lg:max-w-[560px] max-h-screen sm:h-auto flex flex-col overflow-y-auto mt-[10vh] sm:mt-0">
                <h3 className="text-2xl text-[#171717] font-semibold pr-0 lg:pr-0 sm:pr-31">Subscription Application</h3>
                <form onSubmit={handleSubmit} className="mt-9 lg:mt-10 flex flex-col gap-9 lg:gap-8">
                    <div className="flex flex-col gap-2.5">
                        <p className="text-sm lg:text-lg text-[#1B1B29]">Enter your name</p>
                        <input 
                            type="text" 
                            name="username" 
                            className="pl-6 py-3.5 text-sm lg:text-lg rounded-xl outline-none bg-[#F1F4F8] w-full hover:border hover:border-[#838099] focus:border focus:border-[#838099]" 
                            placeholder="Anastasiia" 
                            required 
                            value={username} 
                            onChange={handleUsernameChange} 
                        />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <p className="text-sm lg:text-lg text-[#1B1B29]">E-mail</p>
                        <input 
                            type="email" 
                            name="email" 
                            className={`pl-6 py-3.5 text-sm lg:text-lg rounded-xl outline-none bg-[#F1F4F8] w-full 
                            hover:border hover:border-[#838099] focus:border focus:border-[#838099] 
                            ${!isEmailValid ? "border border-[#FD4646]" : ""}`} 
                            placeholder="Enter your e-mail" 
                            required 
                            value={email} 
                            onChange={handleEmailChange} 
                        />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <p className="text-sm lg:text-lg text-[#1B1B29]">Phone</p>
                        <input 
                            type="tel" 
                            name="phone" 
                            className={`pl-6 py-3.5 text-sm lg:text-lg rounded-xl outline-none bg-[#F1F4F8] w-full 
                            hover:border hover:border-[#838099] focus:border focus:border-[#838099] 
                            ${!isPhoneValid ? "border border-[#FD4646]" : ""}`} 
                            placeholder="Enter your phone" 
                            required 
                            value={phone} 
                            onChange={handlePhoneChange} 
                        />
                    </div>
                    <button type="submit" className="bg-[#1749B3] rounded-xl cursor-pointer text-white font-bold px-18 py-4 w-full sm:w-auto">
                        Sign up
                    </button>
                </form>

                <button
                    onClick={() => setIsSubOpen(false)}
                    className="absolute top-10 right-10 bg-[#1717171A] text-[#3A3A3C] hover:text-[#262628] px-3.5 py-2 rounded-full hidden sm:block"
                >
                    <i className="fa-solid fa-x"></i>
                </button>
            </div>
        </div>
    )
}