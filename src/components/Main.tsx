import React, { useState } from "react";
import mainWoman from "../assets/main-woman.png"
import netflix from "../assets/netflix.png"
import spotify from "../assets/spotify.png"
import youtube from "../assets/youtube.png"

export const Main: React.FC = () => {
    return (
        <main className="bg-[#ECF3FB] pt-12 sm:pt-13 lg:pt-15">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="flex flex-col-reverse sm:flex-row gap-4">
                    <div className="flex flex-col justify-center bg-[#1749B3] px-5 py-5 lg:px-15 lg:py-28.5 sm:px-5 sm:py-6 basis-1/2 rounded-4xl">
                        <h1 className="text-white text-[28px] lg:text-4xl leading-10 lg:leading-12.5 font-bold">Start enjoying a benefit of up to 50%</h1>
                        <p className="text-white mt-6">You have always wanted to get the same product at a special price for you, without haggling - and it is yours.</p>
                        <button 
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
            </div>
        </main>
    )
}