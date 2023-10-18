import { useEffect, useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, useForm } from "@inertiajs/react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkSide } from "@/hooks/useTheme";
import { asset } from "../asset";
import {
    FaChartLine,
    FaFile,
    FaJediOrder,
    FaProductHunt,
    FaSalesforce,
    FaShopify,
} from "react-icons/fa";

export default function Authenticated(props: any) {

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


    const logout = (e) => {
        e.preventDefault();
        route('merchant.logout')
    }

    const cls =
        "flex flex-row items-center gap-4 font-bold text-lg hover:bg-gray-500 transition ease-out duration-200 p-2 rounded-sm";

    return (
        <div className="min-h-screen bg-red-200">
            <div className="min-h-screen flex-row flex">
                <div className="bg-blue-200 max-w-[300px] w-full h-screen bg-gray-900 text-white p-6 px-4">
                    <div>
                        <img
                            src={asset("/images/logo/logo-dark.png")}
                            alt="asd"
                        />
                    </div>
                    <div className="mt-8">
                        <div>
                            <h3 className="text-xl font-bold">Menu</h3>
                        </div>
                        <div className="mt-8">
                            <ul>
                                <li>
                                    <Link href="/" className={cls}>
                                        <FaShopify size={23} /> Products
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/" className={cls}>
                                        <FaJediOrder size={23} /> Orders
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/" className={cls}>
                                        <FaSalesforce size={23} /> Sales
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/" className={cls}>
                                        <FaChartLine size={23} /> Analytics
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link as="button" href={route('merchant.logout')} method="post" className={cls}>
                                        <FaFile size={23} /> Reports
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex-1 h-screen flex flex-col">
                    <div className="bg-white w-full p-5 sticky">header</div>
                    <div className="flex-1 bg-green-200 flex items-center justify-center">
                        <main className="">
                            <div>Content here</div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white dark:bg-gray-900 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo
                                        className="block h-9 w-auto fill-current text-gray-800"
                                        isDarkMode={isDarkMode}
                                    />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink
                                    href={route("password.email")}
                                    // active={route().current("admin/dashboards")}
                                >
                                    Dashboard
                                </NavLink>
                                {/* <NavLink
                                    href={route("store.index")}
                                    active={route().current("store.index")}
                                >
                                    Stores
                                </NavLink> */}
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <DarkModeSwitch
                                checked={isDarkMode}
                                onChange={toggleDarkMode}
                                size={25}
                            />
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white dark:bg-gray-900 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150 dark:text-white"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("adminprofile")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState,
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                {user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("adminprofile")}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
