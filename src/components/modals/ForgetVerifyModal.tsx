import React, { useState, FormEvent } from "react";

interface ForgetVerifyModalProps {
    setIsForgetVerify: React.Dispatch<React.SetStateAction<boolean>>;
    setIsNewPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ForgetVerifyModal: React.FC<ForgetVerifyModalProps> = ({
    setIsForgetVerify,
    setIsNewPassword,}) => {
    const [code, setCode] = useState("");
        const [timer, setTimer] = useState(30);
        const [isTimerRunning, setIsTimerRunning] = useState(false);
    
        const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const inputCode = e.target.value;
            if (inputCode.length <= 4) {
                setCode(inputCode);
            }
        };
    
        const handleForgetSubmit = (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (code.length === 4) {
                setIsForgetVerify(false);
                setIsNewPassword(true);
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
        <div className="fixed inset-0 flex flex-col sm:items-center sm:justify-center sm:backdrop-blur-sm z-40">
            <div className="bg-white flex flex-col h-full sm:h-auto pb-6 sm:pb-10 px-6 sm:px-10 pt-12 sm:pt-10 rounded-none sm:rounded-[32px] shadow-none sm:shadow-lg relative w-full max-w-full sm:max-w-[480px] lg:max-w-[560px] overflow-y-auto mt-[10vh] sm:mt-0">
                <p className="text-2xl text-[#171717] font-semibold">Forget Password</p>
                <p className="text-[#000000] mt-3">We will send reset code in this email.</p>
                <form onSubmit={handleForgetSubmit} className="flex flex-col flex-grow mt-10">
                    <div className="flex flex-col gap-2.5">
                        <p className="text-lg text-[#1B1B29]">Email verification code</p>
                        <div className="relative">
                            <input
                                type="text"
                                className="pl-6 pr-24 py-3.5 rounded-xl outline-none bg-[#F1F4F8] w-full"
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
                    <div className="mt-auto lg:mt-10 sm:mt-9">
                        <button
                            type="submit"
                            className="bg-[#1749B3] rounded-xl cursor-pointer text-white font-bold py-4 w-full"
                            disabled={code.length !== 4}
                        >
                            Restore Password
                        </button>
                    </div>
                </form>
                <button
                    onClick={() => setIsForgetVerify(false)}
                    className="absolute hidden sm:block top-6 right-6 bg-[#1717171A] text-[#3A3A3C] hover:text-[#262628] px-3.5 py-2 rounded-full"
                >
                    <i className="fa-solid fa-x"></i>
                </button>
            </div>
        </div>
    )
}