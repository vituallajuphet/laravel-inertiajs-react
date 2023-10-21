import Dropdown from "@/Components/Dropdown";
import React from "react";
import { FaChevronDown, FaEnvelope } from "react-icons/fa";

const SellerHeader = (props) => {

    const {user} = props
    

    return (
        <div className="bg-white w-full p-2 px-2 sticky shadow-md border border-gray-300">
            <div className="flex justify-between items-center px-5">
                <div>
                    <h2 className="font-bold text-lg">Oraka Fashion Shop</h2>
                </div>
                <div>
                    <div className="flex flex-row items-center">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md mr-2 cursor-pointer">
                                    <div className="rounded-full p-2 flex items-center bg-[#ffd4aa]">
                                        <FaEnvelope
                                            className="text-primary-default"
                                            size={17}
                                        />
                                    </div>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content className={"w-[300px] top-12"}>
                                <div className="">
                                    <div className="py-2 px-3 border-b border-gray-100">
                                        <h3 className="text-base font-bold text-primary-default">
                                            Messages
                                        </h3>
                                    </div>
                                    <div>
                                        <div className="py-2 px-3 flex">
                                            <div className="h-12 w-12 rounded-full">
                                                <img src="https://demo.tailadmin.com/src/images/user/user-02.png" />
                                            </div>
                                            <div className="flex flex-col text-gray-400 ml-3">
                                                <h6 className="text-sm font-medium text-black dark:text-white">
                                                    Mariya Desoja
                                                </h6>
                                                <p className="text-sm">
                                                    I like your confidence 💪
                                                </p>
                                                <p className="text-xs">
                                                    2min ago
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Dropdown.Content>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-3 pr-0 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white dark:bg-gray-900 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150 dark:text-white"
                                    >
                                        {/* {user.name} */}
                                        <div className="flex items-center text-gray-700">
                                            <div className="flex flex-col items-end">
                                                <span className="font-bold text-base">
                                                    {user.name}
                                                </span>
                                                <span className="text-gray-500">
                                                    Janitor
                                                </span>
                                            </div>
                                            <div className="flex items-center ml-4">
                                                <div className="rounded-full w-12 h-12 bg-red-200 mr-2">
                                                    <img src="https://demo.tailadmin.com/src/images/user/user-02.png" />
                                                </div>
                                                <FaChevronDown />
                                            </div>
                                        </div>
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content contentClasses="relative top-0 rounded-none">
                                <Dropdown.Link href={route("adminprofile")}>
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
            </div>
        </div>
    );
};

export default SellerHeader;
