import React, { useEffect, useState } from "react";
import SellerGuest from "@/Layouts/SellerGuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styled from "styled-components";

import { FaArrowRight } from "react-icons/fa";
import DefaultButton from "@/Components/DefaultButton";
import AddressForm from "@/Components/AddressForm/AddressForm";
import ImageUploader from "@/Components/ImageUploader";
import { ID_types } from "@/data";

const tabsClass = {
    base: "w-8 h-8 rounded-full  text-gray-500 flex items-center justify-center font-bold border-gray-200 border-2 cursor-pointer",
    active: "bg-white text-gray-500 border-2 border-primary-default text-primary-default",
    done: "bg-primary-default text-white border-2 border-primary-default",
};

const RegisterStore = (props: any) => {
    const { auth } = props;
    const { user } = auth;
    const [tabIndex, setTabIndex] = useState(0);

    const { data, setData, post, processing, errors, reset } = useForm({
        store_name: "",
        store_nickname: "",
        email: user.email,
        name: user.name,
        business_name: "",
        address: {
            street: "",
            city: "",
            barangay: "",
            country: "Philippines",
            postal_code: "",
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("merchant.register"));
    };

    // useEffect(() => {
    //     setData('email', user.email)
    //     setData('', user.email)
    // }, [user])

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
                            <div className="h-[1px] mt-6 px- bg-gray-200 w-full flex"></div>
                        </div>
                        <StyledTabs
                            selectedIndex={tabIndex}
                            onSelect={(index) => {
                                setTabIndex(index);
                            }}
                        >
                            <TabList
                                className={
                                    "flex-row mb-6 flex items-center justify-center gap-8"
                                }
                            >
                                <Tab
                                    className={`${tabsClass.base} ${
                                        tabIndex === 0 ? tabsClass.active : ""
                                    } `}
                                >
                                    1
                                </Tab>
                                <Tab
                                    className={`${tabsClass.base} ${
                                        tabIndex === 1 ? tabsClass.active : ""
                                    } center-tab`}
                                >
                                    2
                                </Tab>
                                <Tab
                                    className={`${tabsClass.base} ${
                                        tabIndex === 2 ? tabsClass.active : ""
                                    } `}
                                >
                                    3
                                </Tab>
                            </TabList>

                            <TabPanel>
                                <h2 className="text-primary-default dark:text-primary-dark font-bold text-lg">
                                    Business Information
                                </h2>

                                <form action="" onSubmit={handleSubmit}>
                                    <div className="px-2">
                                        <div className="mt-4">
                                            <InputLabel
                                                htmlFor="business_name"
                                                className="dark:text-white"
                                                value="Business Name *"
                                            />
                                            <TextInput
                                                id="business_name"
                                                type="text"
                                                name="business_name"
                                                value={data.business_name}
                                                className="mt-1 block w-full"
                                                autoComplete="email"
                                                onChange={(e) =>
                                                    setData(
                                                        "business_name",
                                                        e.target.value
                                                    )
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
                                                    value={data.email}
                                                    className="mt-1 block w-full"
                                                    autoComplete="email"
                                                    onChange={(e) =>
                                                        setData(
                                                            "email",
                                                            e.target.value
                                                        )
                                                    }
                                                    disabled={true}
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
                                                    value="Business Owner"
                                                />
                                                <TextInput
                                                    id="name"
                                                    type="text"
                                                    name="name"
                                                    placeholder=""
                                                    value={data.name}
                                                    className="mt-1 block w-full"
                                                    autoComplete="email"
                                                    onChange={(e) =>
                                                        setData(
                                                            "name",
                                                            e.target.value
                                                        )
                                                    }
                                                    disabled={true}
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
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                            />

                                            <InputError
                                                message={errors.name}
                                                className="mt-2"
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <AddressForm
                                                onChange={(e) => {
                                                    console.log("eeeeee", e);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4 px-2">
                                        <div className="h-[1px] mt-6 px- bg-gray-200 w-full"></div>
                                        <div className="flex items-center justify-start mt-6">
                                            <DefaultButton
                                                className="dark:bg-primary-dark max-w-[140px]"
                                                disabled={processing}
                                                onClick={() => {
                                                    setTabIndex(1);
                                                }}
                                            >
                                                Next Step
                                                <FaArrowRight className="ml-2" />
                                            </DefaultButton>
                                        </div>
                                    </div>
                                </form>
                            </TabPanel>
                            <TabPanel>
                                {/* start 2*/}
                                <h2 className="text-primary-default dark:text-primary-dark font-bold text-lg">
                                    Requirement Files
                                </h2>

                                <form action="" onSubmit={handleSubmit}>
                                    <div className="px-2">
                                        <div className="mt-4">
                                            <div className="w-[48%]">
                                                <InputLabel
                                                    htmlFor="business_name"
                                                    className="dark:text-white"
                                                    value="ID Type"
                                                />
                                                <select
                                                    name="id_type"
                                                    className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1"
                                                    id="id_type"
                                                >
                                                    <option
                                                        value=""
                                                        className="text-gray-500"
                                                    >
                                                        Select ID Type
                                                    </option>
                                                    {ID_types.map((id) => (
                                                        <option
                                                            key={id}
                                                            value={id}
                                                        >
                                                            {id}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <InputLabel
                                                htmlFor="business_name"
                                                className="dark:text-white"
                                                value="Upload ID (Front and Back)"
                                            />
                                            <div className="mt-2">
                                                <ImageUploader />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 px-2">
                                        <div className="h-[1px] mt-6 px- bg-gray-200 w-full"></div>
                                        <div className="flex items-center justify-start mt-6">
                                            <DefaultButton
                                                className="dark:bg-primary-dark max-w-[140px]"
                                                disabled={processing}
                                            >
                                                Submit
                                            </DefaultButton>
                                        </div>
                                    </div>
                                </form>
                                {/* end 2  */}
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 3</h2>
                            </TabPanel>
                        </StyledTabs>
                    </div>
                </div>
            </div>
        </SellerGuest>
    );
};

const StyledTabs = styled(Tabs)`
    .center-tab {
        position: relative;
        &:before {
            content: "";
            position: absolute;
            width: 32px;
            left: 106%;
            height: 3px;
            background-color: #d4d4d4;
        }
        &:after {
            content: "";
            position: absolute;
            width: 32px;
            right: 106%;
            height: 3px;
            background-color: #d4d4d4;
        }
    }
`;

export default RegisterStore;
