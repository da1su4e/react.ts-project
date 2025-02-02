import React, { useState, FormEvent } from "react";

interface VerificationModalProps {
    email: string;
    setIsVerificationOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsSuccessfulOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const VerificationModal: React.FC<VerificationModalProps> = ({
    email,
    setIsVerificationOpen,
    setIsSuccessfulOpen,
}) => {
    const [code, setCode] = useState("");
    const [timer, setTimer] = useState(30);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputCode = e.target.value;
        if (inputCode.length <= 4) {
            setCode(inputCode);
        }
    };

    const handleVerifySubmit = (e: FormEvent<HTMLFormElement>) => {
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
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
            <div className="bg-white p-10 shadow-lg relative rounded-[32px]">
                <p className="text-2xl text-[#171717] font-semibold">Email verification</p>
                <p className="text-[#000000] mt-3">
                    Please enter the 4-digit verification code that was sent to <br />
                    {email || "name@gmail.com"}. The code is valid for 30 minutes.
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
                    onClick={() => setIsVerificationOpen(false)}
                    className="absolute top-6 right-6 bg-[#1717171A] text-[#3A3A3C] hover:text-[#262628] px-3.5 py-2 rounded-full"
                >
                    <i className="fa-solid fa-x"></i>
                </button>
            </div>
        </div>
    );
};