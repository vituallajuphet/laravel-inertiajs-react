import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import {
    FaChartLine,
    FaChevronDown,
    FaChevronUp,
    FaFile,
    FaJediOrder,
    FaRocket,
    FaSalesforce,
    FaShopify,
    FaStar,
} from "react-icons/fa";
import { asset } from "../../asset";

const cls =
    "flex flex-row items-center gap-4 font-bold text-lg hover:bg-gray-500 transition ease-out duration-200 p-2 rounded-sm";

const Dropdown = (props) => {
    const { children, name, icon, active } = props;

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            <span
                className={`${cls} justify-between cursor-pointer`}
                onClick={handleOpen}
            >
                <div className="flex  gap-4">
                    {icon || <FaChartLine size={23} />} {name || "Dropdown"}
                </div>
                {open ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
            </span>
            {open && <div className="pl-3 mt-1">{children}</div>}
        </>
    );
};

const SellerSideBar = () => {
    const activeCls = (params: string) => {
        return route().current(params) ? "bg-primary-default" : "";
    };

    return (
        <div className="bg-blue-200 max-w-[300px] w-full h-screen bg-gray-900 text-white p-6 px-4">
            <div>
                <Link href={route("merchant.dashboard")}>
                    <img src={asset("/images/logo/logo-dark.png")} alt="asd" />
                </Link>
            </div>
            <div className="mt-8">
                <div>
                    <h3 className="text-xl font-bold">Menu</h3>
                </div>
                <div className="mt-8">
                    <ul>
                        <li className="mt-2">
                            <Dropdown
                                name="Products"
                                icon={<FaShopify size={23} />}
                            >
                                <Link
                                    href={route("merchant.products")}
                                    className={`${cls} ${activeCls(
                                        "merchant.products"
                                    )}`}
                                >
                                    <FaRocket size={23} /> All Products
                                </Link>
                                <Link
                                    href={route("merchant.collections")}
                                    className={`${cls} ${activeCls(
                                        "merchant.collections"
                                    )}`}
                                >
                                    <FaRocket size={23} /> Collections
                                </Link>
                                <Link
                                    href={route("merchant.products")}
                                    className={cls}
                                >
                                    <FaSalesforce size={23} /> Tags
                                </Link>
                                <Link
                                    href={route("merchant.products")}
                                    className={cls}
                                >
                                    <FaStar size={23} /> Reviews
                                </Link>
                            </Dropdown>
                        </li>
                        <li className="mt-2">
                            <Link
                                href={route("merchant.orders")}
                                className={`${cls} ${activeCls(
                                    "merchant.orders"
                                )}`}
                            >
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
                            <Link
                                as="button"
                                href={route("merchant.logout")}
                                method="post"
                                className={cls}
                            >
                                <FaFile size={23} /> Reports
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SellerSideBar;
