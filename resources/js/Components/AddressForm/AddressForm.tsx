import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import { brgy as brgyies, cities, provinces, regions } from "./data";
import _ from "lodash";
import InputLabel from "../InputLabel";
import { AddressProps } from "./types";
import { useAddressValidation } from "./hooks/useAddress";

const AddressForm = (props: AddressProps) => {
    const { onChange, value } = props;

    const selectCls =
        "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1";

    const [selectedValue, setSelectedValue] = useState<any>({});
    const [error, setError] = useState<any>({});

    useEffect(() => {
        if (!_.isEqual(selectedValue, value)) {
            setSelectedValue(value);
        }
    }, [value]);

    const { brgy, city, postal, province, region } = value;

    const changed = useRef<any>(false);

    const memProvinces = useMemo(() => {
        if (!region?.region_code) return [];
        const xx = provinces.filter(
            (pro) => pro.region_code === region?.region_code
        );
        return _.sortBy(xx, ["province_name"]);
    }, [region]);

    const memCity = useMemo(() => {
        if (!province?.province_code) return [];
        const xx = cities.filter(
            (city) => city.province_code === province.province_code
        );
        return _.sortBy(xx, ["city_name"]);
    }, [province]);

    const memBarangay = useMemo(() => {
        if (!city?.city_code) return [];
        //@ts-ignore
        const xx = brgyies.filter((bg: any) => bg.city_code === city.city_code);
        return _.sortBy(xx, ["brgy_name"]);
    }, [city]);

    const handleChanged = (key: string, value: any) => {
        const newValue = {
            ...selectedValue,
            [key]: getValueByCode(key, value),
        };
        setSelectedValue(newValue);
        if (onChange) {
            onChange({
                data: newValue,
                error: useAddressValidation(newValue),
            });
        }
    };

    const getValueByCode = (key: string, value: any) => {
        switch (key) {
            case "region":
                return regions.find((reg) => reg?.region_code === value);
            case "province":
                return memProvinces.find((pro) => pro?.province_code === value);
            case "city":
                return cities.find((city) => city?.city_code === value);
            case "brgy":
                return memBarangay.find((bg) => bg?.brgy_code === value);
            case "postal":
                return value;
        }
    };

    return (
        <div>
            <div className="flex flex-row items-center justify-between">
                <div className="flex-col flex w-[48%]">
                    <InputLabel
                        htmlFor="region"
                        className="dark:text-white"
                        value="Region"
                    />
                    <select
                        className={selectCls}
                        required
                        id="region"
                        name="region"
                        onChange={(e) => {
                            handleChanged("region", e.target.value);
                        }}
                    >
                        <option value="">Select Region</option>
                        {regions.map((region) => {
                            return (
                                <option
                                    key={region.id}
                                    value={region.region_code}
                                >
                                    {region.region_name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="flex-col flex w-[48%]">
                    <InputLabel
                        htmlFor="province"
                        className="dark:text-white"
                        value="Province"
                    />
                    <select
                        className={selectCls}
                        required
                        id="province"
                        name="province"
                        onChange={(e) => {
                            handleChanged("province", e.target.value);
                        }}
                    >
                        <option value="">Select Province</option>
                        {memProvinces.map((province) => {
                            return (
                                <option
                                    key={province.province_code}
                                    value={province.province_code}
                                >
                                    {province.province_name}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between mt-4">
                <div className="flex-col flex w-[48%]">
                    <InputLabel
                        htmlFor="city_municipality"
                        className="dark:text-white"
                        value="City / Municipality"
                    />
                    <select
                        className={selectCls}
                        required
                        id="city_municipality"
                        name="city_municipality"
                        onChange={(e) => {
                            handleChanged("city", e.target.value);
                        }}
                    >
                        <option value="">Select City / Municipality</option>
                        {memCity.map((city) => {
                            return (
                                <option
                                    key={city.city_code}
                                    value={city.city_code}
                                >
                                    {city.city_name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="flex-col flex w-[48%]">
                    <InputLabel
                        htmlFor="barangay"
                        className="dark:text-white"
                        value="Barangay"
                    />
                    <select
                        className={selectCls}
                        required
                        id="barangay"
                        name="barangay"
                        onChange={(e) => {
                            handleChanged("brgy", e.target.value);
                        }}
                    >
                        <option value="">Select Barangay</option>
                        {memBarangay.map((bg) => {
                            return (
                                <option key={bg.brgy_code} value={bg.brgy_code}>
                                    {bg.brgy_name}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between mt-4">
                <div className="flex-col flex w-[48%]">
                    <InputLabel
                        htmlFor="postal_code"
                        className="dark:text-white"
                        value="Postal Code"
                    />
                    <input
                        name="postal_code"
                        className={selectCls}
                        value={postal}
                        onChange={(e) => {
                            handleChanged("postal", e.target.value);
                        }}
                        type="number"
                        placeholder="Enter Postal Code"
                    />
                </div>
            </div>
        </div>
    );
};

export default memo(AddressForm);
