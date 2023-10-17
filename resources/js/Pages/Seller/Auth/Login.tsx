import React from "react";
import SellerGuest from "@/Layouts/SellerGuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Button from "@/Components/Button";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import DefaultButton from "@/Components/DefaultButton";

const Login = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        phone: "",
        email: "",
    });
    return (
        <SellerGuest>
            <Head title="Confirm Password" />
            <div className="min-h-screen bg-red-50 flex flex-col pt-6 ">
                <div className="flex justify-between p-6 sm:max-w-[1200px] w-full mx-auto mt-20">
                    <div className="bg-white dark:bg-gray-900 p-8 shadow-md rounded-md sm:max-w-[40%] w-full">
                        <h2 className="text-primary-default font-bold text-2xl">
                            Login Seller Account
                        </h2>
                        <h3 className="text-primary-default text-lg">
                            Let's Get Started
                        </h3>
                        <form action="">
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="Phone"
                                    value="Phone Number"
                                />

                                <TextInput
                                    id="Phone"
                                    type="number"
                                    name="phone"
                                    value={data.phone}
                                    className="mt-1 block w-full"
                                    autoComplete="email"
                                    onChange={(e) =>
                                        setData("phone", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.phone}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="Email"
                                    value="Email Address"
                                />

                                <TextInput
                                    id="Email"
                                    type="email"
                                    name="phone"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="email"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.phone}
                                    className="mt-2"
                                />
                                <div className="flex items-center justify-end mt-6">
                                    <DefaultButton disabled={processing}>
                                        Register
                                    </DefaultButton>
                                </div>
                                <div className="mt-4">
                                    <div className="text-center text-gray-700">
                                        or
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between gap-4 mt-6">
                                    <Button
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
                                        type="button"
                                        icon={
                                            <FaGoogle size={16} color="red" />
                                        }
                                    >
                                        Google
                                    </Button>
                                </div>
                                <div className="flex mt-6 justify-center gap-2">
                                    <span>Already have an account?</span>
                                    <Link
                                        href={route("login")}
                                        className="font-bold text-primary-default"
                                    >
                                        Login Here
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div></div>
                </div>
            </div>
        </SellerGuest>
    );
};

export default Login;
