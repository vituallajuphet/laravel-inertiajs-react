import React, { useState } from "react";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import tw from "tailwind-styled-components";
import styled from "styled-components";

type Phonenumber = {
    onChange: React.Dispatch<any>;
    value: any;
    [key: string]: any;
};

function Phonenumber(props: Phonenumber) {
    const { onChange, value } = props;

    return (
        <FinalPhone
            international
            value={value}
            onChange={onChange}
            defaultCountry="PH"
        />
    );
}

const StyledPhoneNumber = styled(PhoneInputWithCountrySelect)`
    /* &.PhoneInput {
        display: flex;
        align-items: center;
    } */
    .PhoneInputInput {
        border-color: transparent !important;
        outline: none !important;
        --tw-ring-shadow: none;
        --tw-ring-color: none;
        padding: 0.5rem 0rem !important;
    }
    .PhoneInputCountry {
        display: flex;
        align-items: center;
        position: relative;
        align-self: stretch;
        .PhoneInputCountrySelect {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            z-index: 1;
            border: 0;
            opacity: 0;
            cursor: pointer;
            padding: 0 !important;
        }
        .PhoneInputCountryIcon {
            width: 29px;
            margin-right: 5px;
        }
        .PhoneInputCountrySelectArrow {
            display: block;
            width: 10px;
            height: 10px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M8 13.1l-8-8 2.1-2.2 5.9 5.9 5.9-5.9 2.1 2.2z'/%3E%3C/svg%3E");
            height: 10px;
            width: 10px;
            margin-right: 10px;
        }
    }
`;

const FinalPhone = tw(StyledPhoneNumber)`
    flex items-center border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 px-2 w-full border dark:bg-white
`;

export default Phonenumber;
