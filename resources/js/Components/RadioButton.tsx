import React from "react";

type RadioButton = {
    label: string;
    name: string;
    value?: any;
    onChange?: (e: any) => void;
    [key: string]: any;
};

const RadioButton = ({ label, name, onChange, value }: RadioButton) => {
    return (
        <div className="flex items-center mb-4">
            <input
                onChange={onChange}
                id="default-radio-1"
                type="radio"
                value={value}
                name={name}
                className="w-4 h-4 text-primary-default bg-gray-100 border-gray-300 focus:ring-primary-default dark:focus:ring-primary-default dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
                htmlFor={name}
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
                {label || "Default radio"}
            </label>
        </div>
    );
};

export default RadioButton;
