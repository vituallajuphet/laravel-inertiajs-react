export type AddressValueType = {
    code: string;
    name: string;
};

export type AddressType = {
    region?: AddressValueType;
    city_municipality?: AddressValueType;
    brgy?: AddressValueType;
    province?: AddressValueType;
};

type addressKey = {
    [key: string]: any;
};

export type valueType = {
    region: addressKey;
    province: addressKey;
    city: addressKey;
    brgy: addressKey;
    postal: string;
};

type THandler = {
    data: any;
    error: any;
};

export type AddressProps = {
    onChange?: (e: THandler) => void;
    value: valueType;
    disabled?: boolean;
    required?: boolean;
    formattedString?: boolean;
};
