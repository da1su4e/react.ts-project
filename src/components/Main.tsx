import React, { useState } from "react";
import mainWoman from "../assets/main-woman.png"
import netflix from "../assets/netflix.png"
import spotify from "../assets/spotify.png"
import youtube from "../assets/youtube.png"
import step1 from "../assets/step-1.svg"
import step2 from "../assets/step-2.svg"
import step3 from "../assets/step-3.svg"
import aboutLogo from "../assets/about-logo.svg"
import aboutWoman from "../assets/about-woman.png"
import { SubModal } from "./modals/SubModal";

export const Main: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const [isSubOpen, setIsSubOpen] = useState(false);
    const [isPurchaseOpen, setIsPurchaseOpen] = useState(false);
    const link = "https://t.me/DiscountsOnServices_bot?start=343964809";

    const handleCopy = async () => {
    try {
        await navigator.clipboard.writeText(link);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    } catch (err) {
        console.error("Failed to copy!", err);
    }
    };

    return (
        <main className="bg-[#ECF3FB] pt-26 sm:pt-27 lg:pt-29">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="flex flex-col-reverse sm:flex-row gap-4">
                    <div className="flex flex-col justify-center bg-[#1749B3] px-5 py-5 lg:px-15 lg:py-28.5 sm:px-5 sm:py-6 basis-1/2 rounded-4xl">
                        <h1 className="text-white text-[28px] lg:text-4xl leading-10 lg:leading-12.5 font-bold">Start enjoying a benefit of up to 50%</h1>
                        <p className="text-white mt-6">You have always wanted to get the same product at a special price for you, without haggling - and it is yours.</p>
                        <button 
                            onClick={() => setIsSubOpen(true)}
                            className="bg-white rounded-2xl cursor-pointer px-15.5 py-3.5 lg:px-14 lg:4 self-start mt-10 w-full sm:w-auto"
                        >
                            <span className="text-[#171717] font-bold">Start using</span>
                        </button>
                    </div>
                    <div className="basis-1/2 bg-white rounded-4xl flex justify-center">
                        <img src={mainWoman} alt="" />
                    </div>
                </div>
                <div className="flex flex-col gap-7.5 mt-30 text-center justify-center">
                    <h2 className="text-2xl lg:text-3xl text-[#171717] font-bold text-center">Choose a subscription</h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col-reverse sm:flex-row bg-white shadow-[0px_4px_24px_0px_rgba(213,216,221,0.2)] rounded-4xl gap-8 sm:gap-7 lg:gap-13">
                            <div className="flex flex-col text-left pl-5 pr-5 py-8 lg:px-15 lg:py-15 sm:pl-8 sm:pr-0 sm:py-12 basis-1/2 rounded">
                                <h3 className="text-xl lg:text-2xl text-[#171717] font-medium">Netflix subscription rates</h3>
                                <p className="mt-4 lg:mt-5.5 block lg:block sm:hidden">The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.</p>
                                <button 
                                    className="bg-[#1749B3] rounded-2xl cursor-pointer py-3.5 px-6 self-start mt-8 lg:mt-9.5 sm:mt-6 w-full sm:w-auto"
                                >
                                    <span className="text-white font-bold">Learn more</span>
                                </button>
                            </div>
                            <div className="bg-black basis-1/2 flex justify-center py-10 px-25 rounded-4xl">
                                <img src={netflix} alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col-reverse sm:flex-row bg-white shadow-[0px_4px_24px_0px_rgba(213,216,221,0.2)] rounded-4xl gap-8 sm:gap-7 lg:gap-13">
                            <div className="flex flex-col text-left pl-5 pr-5 py-8 lg:px-15 lg:py-15 sm:pl-8 sm:pr-0 sm:py-12 basis-1/2 rounded">
                                <h3 className="text-xl lg:text-2xl text-[#171717] font-medium">Spotify Premium</h3>
                                <p className="mt-4 lg:mt-5.5 block lg:block sm:hidden">The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.</p>
                                <button 
                                    className="bg-[#1749B3] rounded-2xl cursor-pointer py-3.5 px-6 self-start mt-8 lg:mt-9.5 sm:mt-6 w-full sm:w-auto"
                                >
                                    <span className="text-white font-bold">Learn more</span>
                                </button>
                            </div>
                            <div className="basis-1/2">
                                <img src={spotify} alt=""/>
                            </div>
                        </div>
                        <div className="flex flex-col-reverse sm:flex-row bg-white shadow-[0px_4px_24px_0px_rgba(213,216,221,0.2)] rounded-4xl gap-8 sm:gap-7 lg:gap-13">
                            <div className="flex flex-col text-left pl-5 pr-5 py-8 lg:px-15 lg:py-15 sm:pl-8 sm:pr-0 sm:py-12 basis-1/2 rounded">
                                <h3 className="text-xl lg:text-2xl text-[#171717] font-medium">YouTube Premium </h3>
                                <p className="mt-4 lg:mt-5.5 block lg:block sm:hidden">The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.</p>
                                <button 
                                    className="bg-[#1749B3] rounded-2xl cursor-pointer py-3.5 px-6 self-start mt-8 lg:mt-9.5 sm:mt-6 w-full sm:w-auto"
                                >
                                    <span className="text-white font-bold">Learn more</span>
                                </button>
                            </div>
                            <div className="bg-[#E1DCEB] basis-1/2 py-25 sm:py-0 px-25 rounded-4xl flex justify-center items-center">
                                <img src={youtube} alt="YouTube Premium"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-30 text-center justify-center">
                    <h2 className="text-2xl lg:text-3xl text-[#171717] font-bold text-center">How it works?</h2>
                    <div className="flex flex-col sm:flex-row gap-4 mt-7 sm:mt-8 lg:mt-9.5">
                        <div className="relative basis-1/3 bg-white text-left shadow-[0px_12px_28px_0px_rgba(244,245,245,0.2)] rounded-4xl">
                            <div className="flex flex-col gap-11 sm:gap-10 lg:gap-6.5 pb-5 sm:pb-10 pt-13.5 sm:pt-12 lg:pt-37 pl-5 lg:pl-10">
                                <h4 className="text-xl text-[#171717] font-bold">Step 1</h4>
                                <p className="text-lg pr-5 lg:pr-30">Enter your account information</p>
                            </div>
                            <div className="absolute top-5 right-5 sm:right-5.5 lg:top-1.5 lg:right-1.5">
                            <img 
                                src={step1} 
                                alt="" 
                                className="max-w-[93px] sm:max-w-[81px] md:max-w-[81px] lg:max-w-[173px]"
                            />
                            </div>
                        </div>
                        <div className="relative basis-1/3 bg-white text-left shadow-[0px_12px_28px_0px_rgba(244,245,245,0.2)] rounded-4xl">
                            <div className="flex flex-col gap-11 sm:gap-10 lg:gap-6.5 pb-5 sm:pb-10 pt-13.5 sm:pt-12 lg:pt-37 pl-5 lg:pl-10">
                                <h4 className="text-xl text-[#171717] font-bold">Step 2</h4>
                                <p className="text-lg pr-5 lg:pr-30">Select the desired subscription and plan</p>
                            </div>
                            <div className="absolute top-5 right-5 sm:right-5.5 lg:top-1.5 lg:right-1.5">
                            <img 
                                src={step2} 
                                alt="" 
                                className="max-w-[93px] sm:max-w-[81px] md:max-w-[81px] lg:max-w-[173px]"
                            />
                            </div>
                        </div>
                        <div className="relative basis-1/3 bg-white text-left shadow-[0px_12px_28px_0px_rgba(244,245,245,0.2)] rounded-4xl">
                            <div className="flex flex-col gap-11 sm:gap-10 lg:gap-6.5 pb-5 sm:pb-10 pt-13.5 sm:pt-12 lg:pt-37 pl-5 lg:pl-10">
                                <h4 className="text-xl text-[#171717] font-bold">Step 3</h4>
                                <p className="text-lg pr-5 lg:pr-30">Pay your bill with PayPal</p>
                            </div>
                            <div className="absolute top-5 right-5 sm:right-5.5 lg:top-1.5 lg:right-1.5">
                            <img 
                                src={step3} 
                                alt="" 
                                className="max-w-[93px] sm:max-w-[81px] md:max-w-[81px] lg:max-w-[173px]"
                            />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-8 lg:gap-22 p-5 sm:p-8 lg:px-20 lg:py-11 mt-5 bg-[#1749B3] shadow-lg shadow-[#D5D8DD33] rounded-3xl lg:rounded-4xl">
                        <div className="flex flex-col gap-4 lg:gap-6 basis-1/2 text-left">
                            <h3 className="text-xl lg:text-2xl text-white">Invite friends</h3>
                            <p className="text-white">Starting today up to 50% for NETFLIX, YOUTUBE, SPOTIFY subscriptions with a secure payment from PAYPAL</p>
                        </div>
                        <div className="flex flex-col gap-2.5 lg:gap-3 items-center px-8 py-7 sm:px-6 sm:py-5 lg:px-18 lg:py-7 bg-white rounded-2xl">
                            <h5 className="text-xl text-[#171717]">Click on the link</h5>
                            <div className="flex items-center gap-4 sm:gap-5 lg:gap-2">
                                <a href={link} target="_blank" className="text-sm sm:text-lg lg:text-xl text-[#1749B3] font-medium underline uppercase">
                                    Discounts On Services
                                </a>
                                <button onClick={handleCopy} className="text-lg sm:text-2xl transition-colors duration-300">
                                    {copied ? (
                                        <i className="fa-solid fa-check text-green-500"></i> 
                                    ) : (
                                        <i className="fa-regular fa-copy text-[#171717] cursor-pointer"></i>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-7 sm:gap-8 lg:gap-9.5 mt-30 text-center justify-center">
                    <h2 className="text-2xl lg:text-3xl text-[#171717] font-bold text-center">About us</h2>
                    <div className="flex flex-col-reverse sm:flex-row gap-4">
                        <div className="flex flex-col gap-4 lg:gap-8 bg-white shadow-[0px_4px_24px_0px_rgba(213,216,221,0.2)] rounded-4xl p-5 lg:p-15 basis-1/2 text-left">
                            <img src={aboutLogo} alt="" className="max-w-15 max-h-15 lg:max-w-32.5 lg:max-h-32.5"/>
                            <p className="text-lg">We offer you a subscription to various media services at the best price.</p>
                            <p className="text-lg">We have partnered with several companies to help you find the best prices for your media subscriptions and provide you with the best prices for the Premium subscriptions you want.</p>
                            <p className="font-bold text-[#171717] text-lg">It's simple, fast and economical.</p>
                        </div>
                        <div className="basis-1/2 bg-white rounded-4xl flex justify-center items-center">
                            <img src={aboutWoman} alt="" className="max-w-full max-h-full object-contain" />
                        </div>
                    </div>
                </div>
            </div>
            {isSubOpen && 
                <SubModal
                    setIsSubOpen={setIsSubOpen}
                    setIsPurchaseOpen={setIsPurchaseOpen}
                />
            }
        </main>
    )
}