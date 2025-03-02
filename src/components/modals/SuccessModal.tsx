import React from "react";

interface SuccessModalProps {
    setIsSuccessfulOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ setIsSuccessfulOpen }) => {
    return (
        <div className="fixed inset-0 flex flex-col sm:items-center sm:justify-center sm:backdrop-blur-sm z-40">
            <div className="bg-white flex flex-col h-full sm:h-auto pb-6 sm:pb-10 px-6 sm:px-10 pt-12 sm:pt-10 rounded-none sm:rounded-[32px] shadow-none sm:shadow-lg relative w-full max-w-full sm:max-w-[480px] lg:max-w-[560px] overflow-y-auto mt-[10vh] sm:mt-0">
                <p className="text-2xl text-[#171717] font-semibold">Successful registration</p>
                <p className="text-[#000000] mt-3">
                    By optimizing our work and using internal tools, we were <br />
                    able to lower the prices while keeping the highest <br />
                    possible.
                </p>
                <button
                    onClick={() => setIsSuccessfulOpen(false)}
                    className="bg-[#1749B3] rounded-xl cursor-pointer text-white font-bold py-4 w-full mt-auto lg:mt-10 sm:mt-9"
                >
                    Continue work
                </button>
                <button
                    onClick={() => setIsSuccessfulOpen(false)}
                    className="absolute hidden sm:block top-6 right-6 bg-[#1717171A] text-[#3A3A3C] hover:text-[#262628] px-3.5 py-2 rounded-full"
                >
                    <i className="fa-solid fa-x"></i>
                </button>
            </div>
        </div>
    );
};