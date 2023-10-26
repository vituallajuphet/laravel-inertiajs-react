import _ from "lodash";
import { useMemo } from "react";

type FormDataType = object;

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
        return error.length > 0;
    } else {
        return !_.isEmpty(value);
    }
};

export const useValidator = (formdata: FormDataType, validators: object) => {
    const errors = useMemo(() => {
        if (_.isEmpty(validators) || _.isEmpty(formdata)) return false;

        const hasError = Object.entries(validators).reduce(
            (acc, [key, value]) => {
                console.log("key, value", key, value);

                return acc;
            },
            []
        );
    }, [formdata]);

    return {
        isValidated: true,
    };
};
