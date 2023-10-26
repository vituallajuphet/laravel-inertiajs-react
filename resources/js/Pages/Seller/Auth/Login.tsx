import React, { useEffect } from "react";
import SellerGuest from "@/Layouts/SellerGuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Button from "@/Components/Button";
import { FaBroadcastTower, FaFacebook, FaGoogle } from "react-icons/fa";
import DefaultButton from "@/Components/DefaultButton";
import Checkbox from "@/Components/Checkbox";

const Login = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("merchant.store"));
    };

    return (
        <SellerGuest>
            <Head title="Confirm Password" />
            <div className="min-h-screen bg-red-50 dark:bg-gray-900 flex flex-col pt-6 ">
                <div className="flex justify-between p-6 sm:max-w-[1200px] w-full mx-auto mt-20">
                    <div className="bg-white dark:bg-gray-900 dark:border dark:border-white dark:shadow-none p-8 shadow-md rounded-md sm:max-w-[40%] w-full">
                        <h2 className="text-primary-default dark:text-primary-dark font-bold text-2xl">
                            Login Seller Account
                        </h2>
                        <form action="" onSubmit={submit}>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="email"
                                    className="dark:text-white"
                                    value="Email Address"
                                />

                                <TextInput
                                    id="Phone"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="email"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    className="dark:text-white"
                                    htmlFor="password"
                                    value="Password"
                                />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>
                            <div className="block mt-4">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                "remember",
                                                e.target.checked
                                            )
                                        }
                                    />
                                    <span className="ml-2 text-sm text-gray-600">
                                        Remember me
                                    </span>
                                </label>
                            </div>
                            <div className="block mt-4">
                                <div className="flex items-center justify-end mt-6">
                                    <DefaultButton
                                        className="dark:bg-primary-dark"
                                        disabled={processing}
                                        type="submit"
                                    >
                                        Login Account
                                    </DefaultButton>
                                </div>
                                <div className="mt-4">
                                    <div className="text-center text-gray-700 dark:text-white">
                                        or login using
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between gap-4 mt-6">
                                    <Button
                                        className="dark:text-white"
                                        type="button"
                                        icon={
                                            <FaFacebook
                                                size={17}
                                                color="#176fb0"
                                            />
                                        }
                                        variant="outlined"
                                    >
                                        Facebook
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        className="dark:text-white"
                                        type="button"
                                        icon={
                                            <FaGoogle size={16} color="red" />
                                        }
                                    >
                                        Google
                                    </Button>
                                </div>
                                <div className="flex mt-6 justify-center gap-2 dark:text-white">
                                    <span>New to Buynimo?</span>
                                    <Link
                                        href={route("merchant.register")}
                                        className="font-bold text-primary-default dark:text-white"
                                    >
                                        Sign Up Here
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="flex-1 p-6 px-16 text-gray-900 dark:text-white">
                        <div>
                            <h2 className="text-4xl font-bold text-primary-default dark:text-primary-dark">
                                Sample Marketplace
                            </h2>
                            <h3 className="text-2xl mt-3 text-primary-default dark:text-primary-dark">
                                Grow your business and Sell more
                            </h3>
                        </div>
                        <div className="mt-6">
                            <div className="flex items-center justify-between gap-4">
                                <div className="border flex dark:border-primary-dark border-primary-default rounded-full flex justify-center items-center w-14 h-14">
                                    <FaBroadcastTower
                                        className="text-primary-default dark:text-primary-dark"
                                        size={25}
                                    />
                                </div>
                                <div className="flex flex-col flex-1">
                                    <h3 className="text-lg font-bold mt-3 text-primary-default dark:text-primary-dark">
                                        Uprising E-Commerce Platform
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Cum dolores veniam
                                        neque, eum est.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-4 mt-4">
                                <div className="border flex dark:border-primary-dark border-primary-default  rounded-full flex justify-center items-center w-14 h-14">
                                    <FaBroadcastTower
                                        className="text-primary-default dark:text-primary-dark"
                                        size={25}
                                    />
                                </div>
                                <div className="flex flex-col flex-1">
                                    <h3 className="text-lg font-bold mt-3 text-primary-default dark:text-primary-dark">
                                        Uprising E-Commerce Platform
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Cum dolores veniam
                                        neque, eum est.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-4 mt-4">
                                <div className="border flex dark:border-primary-dark border-primary-default rounded-full flex justify-center items-center w-14 h-14">
                                    <FaBroadcastTower
                                        className="text-primary-default dark:text-primary-dark"
                                        size={25}
                                    />
                                </div>
                                <div className="flex flex-col flex-1">
                                    <h3 className="text-lg font-bold mt-3 text-primary-default dark:text-primary-dark">
                                        Uprising E-Commerce Platform
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Cum dolores veniam
                                        neque, eum est.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SellerGuest>
    );
};

export default Login;
