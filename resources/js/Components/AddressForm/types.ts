export type AddressValueType = {
    code: string;
    name: string;
};

export type AddressType = {
    region?: AddressValueType;
    city_municipality?: AddressValueType;
    barangay?: AddressValueType;
    province?: AddressValueType;
};

export type AddressProps = {
    onChange?: (e: { error?: string[]; data?: object }) => void;
    value?: AddressType;
    disabled?: boolean;
    required?: boolean;
    formattedString?: boolean;
};
