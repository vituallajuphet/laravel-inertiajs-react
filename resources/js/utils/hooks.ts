import _ from "lodash";
import { useMemo } from "react";

type FormDataType = {
    [key: string]: any;
};

const hasValue = (value?: any | object | number) => {
    if (typeof value === "object") {
        const error = Object.entries(value).reduce(
            (acc: string[], [key, val]) => {
                if (_.isEmpty(val)) {
                    acc = ["error"];
                }

                return [...acc];
            },
            []
        );

        return error.length === 0;
    } else {
        return !_.isEmpty(value);
    }
};

export const useValidator = (formdata: FormDataType, validators: object) => {
    const errors = useMemo(() => {
        if (_.isEmpty(validators) || _.isEmpty(formdata))
            return { errors: {}, validated: true };

        const hasError = Object.entries(validators).reduce(
            (acc, [key, value], index) => {
                if (_.isArray(value)) {
                    value.map((validation?: string) => {
                        if (typeof validation === "string") {
                            if (validation === "required") {
                                const hasData = hasValue(formdata[key]);
                                if (!hasData) {
                                    acc = {
                                        errors: {
                                            ...acc.errors,
                                            [key]: "must not empty!",
                                        },
                                        validated: false,
                                    };
                                }
                                return acc;
                            } else if (validation.includes("min")) {
                                const [, num] = validation?.split("|");
                                if (num > formdata[key]?.length) {
                                    acc = {
                                        errors: {
                                            ...acc.errors,
                                            [key]: `must have a minimum character of ${num}`,
                                        },
                                        validated: false,
                                    };
                                }
                            }
                        }
                    });
                }

                return acc;
            },
            {
                errors: {},
                validated: true,
            }
        );

        return hasError;
    }, [formdata]);

    return errors;
};
