import { useState } from "react";

interface NewPasswordProps {
    setIsNewPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NewPasswordModal: React.FC<NewPasswordProps> = ({ setIsNewPassword }) => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");

    const handleRestorePassword = () => {
        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        setIsNewPassword(false);
    };

    return (
        <div className="fixed inset-0 flex flex-col sm:items-center sm:justify-center sm:backdrop-blur-sm z-40">
            <div className="bg-white flex flex-col h-full sm:h-auto pb-6 sm:pb-10 px-6 sm:px-10 pt-12 sm:pt-10 rounded-none sm:rounded-[32px] shadow-none sm:shadow-lg relative w-full max-w-full sm:max-w-[480px] lg:max-w-[560px] overflow-y-auto mt-[10vh] sm:mt-0">
                <p className="text-2xl mb-3 font-semibold">Forget Password</p>
                <p className="text-[#000]">Enter a new password.</p>

                <div className="flex flex-col flex-grow gap-5 mt-10">
                    <div className="flex gap-6 lg:gap-5 flex-col lg:flex-row">
                        <div className="flex flex-col gap-2">
                            <label className="text-[#1B1B29]">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="pl-6 pr-12 py-3.5 rounded-xl outline-none bg-[#F1F4F8] w-full"
                                    placeholder="********"
                                    required
                                    minLength={8}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <i className={`fa-regular text-[#1749B3] ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[#1B1B29]">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    className="pl-6 pr-12 py-3.5 rounded-xl outline-none bg-[#F1F4F8] w-full"
                                    placeholder="********"
                                    required
                                    minLength={8}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    <i className={`fa-regular text-[#1749B3] ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {error && <p className="text-red-500">{error}</p>}

                    <div className="mt-auto lg:mt-10 sm:mt-9">
                        <button
                            onClick={handleRestorePassword}
                            className="bg-[#1749B3] rounded-xl cursor-pointer text-white font-bold px-6 py-4 w-full"
                        >
                            Restore Password
                        </button>
                    </div>
                </div>

                <button
                    onClick={() => setIsNewPassword(false)}
                    className="absolute hidden sm:block top-6 right-6 bg-[#1717171A] text-[#3A3A3C] hover:text-[#262628] px-3.5 py-2 rounded-full"
                >
                    <i className="fa-solid fa-x"></i>
                </button>
            </div>
        </div>
    );
};
