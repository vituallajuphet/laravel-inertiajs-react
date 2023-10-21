import { useEffect, useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, useForm } from "@inertiajs/react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkSide } from "@/hooks/useTheme";
import {

    FaChevronDown,
    FaEnvelope,

} from "react-icons/fa";
import SellerSideBar from "./Sidebars/SellerSideBar";
import SellerHeader from "./Headers/SellerHeader";

export default function MerchantAuthenticatedLayout(props: any) {

    const {post} =  useForm()

    const { user, header, children } = props;
    const { theme, setTheme } = useDarkSide();

    const [isDarkMode, setDarkMode] = useState<boolean>(theme === "dark");

    const toggleDarkMode = (checked: boolean) => {
        setTheme(checked ? "dark" : "light");
        setDarkMode(checked);
    };

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    useEffect(() => {}, []);

    const cls =
        "flex flex-row items-center gap-4 font-bold text-lg hover:bg-gray-500 transition ease-out duration-200 p-2 rounded-sm";

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <div className="min-h-screen flex-row flex">
                <SellerSideBar />
                <div className="flex-1 h-screen flex flex-col">
                    <SellerHeader {...props} />
                    <div className="flex-1 flex overflow-y-scroll">
                        <main className="h-full w-full p-8">
                            {props.children}
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}
