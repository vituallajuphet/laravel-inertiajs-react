import _ from "lodash";

export const useAddressValidation = (address: any) => {
    const errors = Object.entries(address).reduce((acc: {}, [key, value]) => {
        if (_.isEmpty(value)) {
            acc = { ...acc, [key]: "must not empty" };
        } else {
            if (key === "postal") {
                const val = value as string;
                if (val.length !== 4) {
                    acc = {
                        ...acc,
                        [key]: "invalid postal code, it must be 4 characters",
                    };
                }
            }
        }

        return acc;
    }, {});
    return errors;
};
