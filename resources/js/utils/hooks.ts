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
                    acc = [key];
                }

                return [...acc];
            },
            []
        );

        console.log("hasData error", error);
        return error.length === 0;
    } else {
        return !_.isEmpty(value);
    }
};

export const useValidator = (formdata: FormDataType, validators: object) => {
    const errors = useMemo(() => {
        if (_.isEmpty(validators) || _.isEmpty(formdata)) return false;

        const hasError = Object.entries(validators).reduce(
            (acc, [key, value], index) => {
                if (_.isArray(value)) {
                    value.map((validation?: string) => {
                        if (typeof validation === "string") {
                            if (validation === "required") {
                                const hasData = hasValue(formdata[key]);
                            }
                        }
                    });
                }

                return acc;
            },
            []
        );
    }, [formdata]);

    return {
        isValidated: true,
    };
};
