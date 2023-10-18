import React, { useEffect } from "react";
import SellerGuest from "@/Layouts/SellerGuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Button from "@/Components/Button";
import { FaBroadcastTower, FaFacebook, FaGoogle } from "react-icons/fa";
import DefaultButton from "@/Components/DefaultButton";
import RadioButton from "@/Components/RadioButton";

const Register = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        phone: "",
        email: "",
        seller_type: "",
        name: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('merchant.store'));
    }

    return (
        <SellerGuest>
            <Head title="Confirm Password" />
            <div className="min-h-screen bg-red-50 dark:bg-gray-900 flex flex-col pt-6 ">
                <div className="flex justify-between p-6 sm:max-w-[1200px] w-full mx-auto mt-20">
                    <div className="bg-white dark:bg-gray-900 dark:border dark:border-white dark:shadow-none p-8 shadow-md rounded-md sm:max-w-[40%] w-full">
                        <h2 className="text-primary-default dark:text-primary-dark font-bold text-2xl">
                            Create Seller Account
                        </h2>
                        <form action="" onSubmit={handleSubmit}>
                            <div className="mt-8">
                                <InputLabel
                                    htmlFor="seller_type"
                                    className="dark:text-white"
                                    value="Select Store Type"
                                />

                                <div className="flex flex-row mt-2 gap-4">
                                    <RadioButton 
                                        onChange={(e) => {
                                            setData("seller_type",  e.target.value)
                                         }} 
                                         label='Individual' 
                                         name="seller_type" 
                                         value="Individual"
                                    />
                                    <RadioButton 
                                        label='Corporate' 
                                        name='seller_type' 
                                        value="Corporate"
                                        onChange={(e) => {
                                            setData("seller_type",  e.target.value)
                                        }} 
                                    />
                                </div>
                                <InputError
                                    message={errors.seller_type}
                                    className="mb-4"
                                />
                            </div>
                            <div className="mt-2">
                                <InputLabel
                                    htmlFor="name"
                                    className="dark:text-white"
                                    value="Seller Full Name"
                                />

                                <TextInput
                                    id="Phone"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    autoComplete="email"
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="Phone"
                                    className="dark:text-white"
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
                                    className="dark:text-white"
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
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel htmlFor="password" value="Password" />

                                <TextInput
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="password"
                                    onChange={(e) => setData('password', e.target.value)}
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                                <TextInput
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                />

                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                            <div className="flex items-center justify-end mt-6">
                                    <DefaultButton
                                        className="dark:bg-primary-dark"
                                        disabled={processing}
                                    >
                                        Register
                                    </DefaultButton>
                                </div>
                                <div className="mt-4">
                                    <div className="text-center text-gray-700 dark:text-white">
                                        or
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
                                    <span>Already have an account?</span>
                                    <Link
                                        href={route("merchant.login")}
                                        className="font-bold text-primary-default dark:text-white"
                                    >
                                        Login Here
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

export default Register;
