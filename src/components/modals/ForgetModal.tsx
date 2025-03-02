interface ForgetProps {
    setIsForgetOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsForgetVerify: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ForgetModal: React.FC<ForgetProps> = ({ setIsForgetOpen, setIsForgetVerify }) => {
    return (
        <div className="fixed inset-0 flex flex-col sm:items-center sm:justify-center sm:backdrop-blur-sm z-40">
            <div className="bg-white flex flex-col h-full sm:h-auto pb-6 sm:pb-10 px-6 sm:px-10 pt-12 sm:pt-10 rounded-none sm:rounded-[32px] shadow-none sm:shadow-lg relative w-full max-w-full sm:max-w-[480px] lg:max-w-[560px] overflow-y-auto mt-[10vh] sm:mt-0">
                <p className="text-2xl mb-3 font-semibold">Forget Password</p>
                <p className="text-[#000]">We will send reset code to this email.</p>
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        setIsForgetOpen(false);
                        setIsForgetVerify(true);
                    }}
                    className="flex flex-col flex-grow mt-10 gap-8"
                >
                    <div className="flex flex-col gap-2.5">
                        <p className="text-lg text-[#1B1B29]">Email Address</p>
                        <input
                            type="email"
                            className="pl-6 py-3.5 rounded-xl outline-none bg-[#F1F4F8] w-full"
                            placeholder="name@gmail.com"
                            required
                        />
                    </div>
                    <div className="mt-auto lg:mt-10 sm:mt-9">
                        <button
                            type="submit"
                            className="bg-[#1749B3] rounded-xl cursor-pointer text-white text-lg font-semibold py-4 w-full"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <button
                    onClick={() => setIsForgetOpen(false)}
                    className="absolute top-6 right-6 bg-[#1717171A] text-[#3A3A3C] hover:text-[#262628] px-3.5 py-2 rounded-full"
                >
                    <i className="fa-solid fa-x"></i>
                </button>
            </div>
        </div>
    );
};
