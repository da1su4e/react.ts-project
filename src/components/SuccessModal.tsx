import React from "react";

interface SuccessModalProps {
    setIsSuccessfulOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ setIsSuccessfulOpen }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
            <div className="bg-white py-30 px-10 shadow-lg relative rounded-[32px] w-[540px]">
                <p className="text-2xl text-[#171717] font-semibold">Successful registration</p>
                <p className="text-[#000000] mt-3">
                    By optimizing our work and using internal tools, we were <br />
                    able to lower the prices while keeping the highest <br />
                    possible.
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
    );
};