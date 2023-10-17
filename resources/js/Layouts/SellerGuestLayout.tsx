import ApplicationLogo from "@/Components/ApplicationLogo";
import { useDarkSide } from "@/hooks/useTheme";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import DefaultButton from "@/Components/DefaultButton";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Button";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SellerGuest = (props: any) => {
    const { children } = props;

    const { theme, setTheme } = useDarkSide();

    const [isDarkMode, setDarkMode] = useState<boolean>(theme === "dark");

    const toggleDarkMode = (checked: boolean) => {
        setTheme(checked ? "dark" : "light");
        setDarkMode(checked);
    };

    return (
        <div className="bg-white dark:bg-gray-900 ">
            <div className="items-center flex justify-between p-4 fixed w-full bg-white dark:bg-gray-900">
                <div>
                    <Link href="/">
                        <ApplicationLogo
                            className="w-20 h-20 fill-current text-gray-500"
                            isDarkMode={isDarkMode}
                        />
                    </Link>
                </div>
                <div className="flex justify-end">
                    <DarkModeSwitch
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={25}
                    />
                </div>
            </div>
            {children}
        </div>
    );
};

export default SellerGuest;
