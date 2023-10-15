import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import { useDarkSide } from "@/hooks/useTheme";

const Home = (props) => {
    const { auth, laravelVersion, phpVersion, url } = props;

    const { theme } = useDarkSide();

    return (
        <>
            <Head title="Home" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {auth.user ? (
                        <Link
                            href={route("dashboards")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
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
                        </>
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
