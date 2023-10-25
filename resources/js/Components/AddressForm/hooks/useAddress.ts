import { useEffect, useMemo, useRef, useState } from "react";
import _ from "lodash";

export const useAddressValidation = (address: any) => {
    const memError = useMemo(() => {
        return Object.entries(address).reduce((acc: string[], [key, value]) => {
            if (_.isEmpty(value)) {
                acc = [...acc, `${key} must not empty`];
            } else {
                if (key === "postal") {
                    const val = value as string;
                    if (val.length !== 4) {
                        acc = [...acc, `invalid postal code`];
                    }
                }
            }

            return acc;
        }, []);
    }, [address]);

    const memData = useMemo(() => {
        if (!memError.length) {
            return address;
        }
    }, [memError]);

    return {
        data: memData || {},
        error: memError,
    };
};
