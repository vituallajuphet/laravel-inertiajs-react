import React, { useEffect, useState } from "react";
import SellerGuest from "@/Layouts/SellerGuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Button from "@/Components/Button";
import { FaBroadcastTower, FaFacebook, FaGoogle } from "react-icons/fa";
import DefaultButton from "@/Components/DefaultButton";
import RadioButton from "@/Components/RadioButton";
import Phonenumber from "@/Components/Phonenumber";
import AddressForm from "@/Components/AddressForm/AddressForm";

const RegisterStore = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        store_name: "",
        store_nickname: "",
        address: {
            street: "",
            city: "",
            barangay: "",
            country: "Philippines",
            postal_code: "",
        },
    });

    const [phonenumber, setPhonenumber] = useState<any>();

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("merchant.register"));
    };

    return (
        <SellerGuest>
            <Head title="Confirm Password" />
            <div className="min-h-screen bg-red-50 dark:bg-gray-900 flex flex-col pt-6 ">
                <div className="flex justify-center p-6 sm:max-w-[1200px] w-full mx-auto mt-20">
                    <div className="bg-white dark:bg-gray-900 dark:border dark:border-white dark:shadow-none p-8 shadow-md rounded-md sm:max-w-[60%] w-full">
                        <div className="text-center mb-4">
                            <h2 className="text-primary-default dark:text-primary-dark font-bold text-2xl">
                                Business Registration Form
                            </h2>
                            <div className="h-[1px] mt-6 px- bg-gray-200 w-full"></div>
                        </div>
                        <h2 className="text-primary-default dark:text-primary-dark font-bold text-lg">
                            Business Information
                        </h2>
                        <form action="" onSubmit={handleSubmit}>
                            <div className="px-2">
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="seller_type"
                                        className="dark:text-white"
                                        value="Business Name *"
                                    />
                                    <TextInput
                                        id="name"
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
                                <div className="flex items-center justify-between mt-4">
                                    <div className="w-[48%]">
                                        <InputLabel
                                            htmlFor="seller_type"
                                            className="dark:text-white"
                                            value="Business Email Address*"
                                        />
                                        <TextInput
                                            id="name"
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
                                    <div className="w-[48%]">
                                        <InputLabel
                                            htmlFor="seller_type"
                                            className="dark:text-white"
                                            value="Website"
                                        />
                                        <TextInput
                                            id="name"
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
                                </div>
                                <div className="h-[1px] mt-6 px- bg-gray-200 w-full"></div>
                            </div>

                            <div className="mt-4">
                                <h2 className="text-primary-default dark:text-primary-dark font-bold text-lg">
                                    Business Address
                                </h2>
                            </div>

                            <div className="px-2">
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="seller_type"
                                        className="dark:text-white"
                                        value="Business Street Address"
                                    />

                                    <TextInput
                                        id="name"
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
                                    <AddressForm />
                                </div>
                            </div>
                             
                            <div className="mt-4 px-2">
                            <div className="h-[1px] mt-6 px- bg-gray-200 w-full"></div>
                                <div className="flex items-center justify-start mt-6">
                                    <DefaultButton
                                        className="dark:bg-primary-dark max-w-[200px]"
                                        disabled={processing}
                                    >
                                        Register MY Store
                                    </DefaultButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </SellerGuest>
    );
};

export default RegisterStore;
