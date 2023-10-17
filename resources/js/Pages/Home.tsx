import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import { useDarkSide } from "@/hooks/useTheme";

const Home = (props) => {
    const { auth, laravelVersion, phpVersion, url } = props;

    const { theme } = useDarkSide();

    return (
        <>
            <Head title="Build your online store" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 w-full text-right">
                    {auth.user ? (
                        <Link
                            href={route("dashboards")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <div className="flex items-center justify-between w-full">
                            <div>
                                <Link
                                    href={route("merchant.register")}
                                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Selling Center
                                </Link>
                                <Link
                                    href={route("login")}
                                    className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Downloads
                                </Link>
                            </div>
                            <div>
                                <Link
                                    href={route("login")}
                                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Log in
                                </Link>

                                <Link
                                    href={route("register")}
                                    className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Register
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex flex-1 justify-center">
                    <div className="max-w-sm">
                        <img
                            src={`/images/logo/${
                                theme === "dark" ? "logo-dark" : "logo-white"
                            }.png`}
                        />
                        <p className="text-lg text-gray-700 dark:text-gray-400 mt-2 text-center">
                            Your Vision, Your Store, Our Expertise.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
