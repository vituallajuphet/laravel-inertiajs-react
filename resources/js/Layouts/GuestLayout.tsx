import ApplicationLogo from "@/Components/ApplicationLogo";
import { useDarkSide } from "@/hooks/useTheme";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Guest(props: any) {
    const { children } = props;

    const { theme, setTheme } = useDarkSide();

    const [isDarkMode, setDarkMode] = useState<boolean>(theme === "dark");

    const toggleDarkMode = (checked: boolean) => {
        setTheme(checked ? "dark" : "light");
        setDarkMode(checked);
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900">
            <div className="p-4 flex justify-end">
                <DarkModeSwitch
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    size={25}
                />
            </div>
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 ">
                <div>
                    <Link href="/">
                        <ApplicationLogo
                            className="w-20 h-20 fill-current text-gray-500"
                            isDarkMode={isDarkMode}
                        />
                    </Link>
                </div>

                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}
