import React, { useEffect, useMemo, useState } from "react";
import { brgy, cities, provinces, regions } from "./data";
import _ from "lodash";
import InputLabel from "../InputLabel";
import { AddressProps } from "./types";
import { useAddressValidation } from "./hooks/useAddress";

const AddressForm = (props: AddressProps) => {
    const { onChange } = props;

    const selectCls =
        "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1";

    const [region, setRegion] = useState<any>({});
    const [selectedProvince, setSelectedProvince] = useState<any>({});
    const [selectedCity, setSelectedCity] = useState<any>({});
    const [selectedBarangay, setSelectedBarangay] = useState<any>({});
    const [postalCode, setPostalCode] = useState<string>("");

    const memProvinces = useMemo(() => {
        if (!region?.region_code) return [];
        const xx = provinces.filter(
            (pro) => pro.region_code === region?.region_code
        );
        return _.sortBy(xx, ["province_name"]);
    }, [region?.region_code]);

    const memCity = useMemo(() => {
        if (!selectedProvince?.province_code) return [];
        const xx = cities.filter(
            (city) => city.province_code === selectedProvince.province_code
        );
        return _.sortBy(xx, ["city_name"]);
    }, [selectedProvince]);

    const memBarangay = useMemo(() => {
        if (!selectedCity?.city_code) return [];
        //@ts-ignore
        const xx = brgy.filter((bg) => bg.city_code === selectedCity.city_code);
        return _.sortBy(xx, ["brgy_name"]);
    }, [selectedCity]);

    const handleChange = (value?: string) => {
        setRegion(regions.find((reg) => reg?.region_code === value));
        setSelectedProvince({});
        setSelectedCity({});
    };

    const handleChangeProvince = (value?: string) => {
        setSelectedProvince(
            memProvinces.find((pro) => pro?.province_code === value)
        );
    };

    const handleChangeCity = (value?: string) => {
        setSelectedCity(cities.find((city) => city?.city_code === value));
    };

    const handleChangeBarangay = (value?: string) => {
        setSelectedBarangay(memBarangay.find((bg) => bg?.brgy_code === value));
    };

    const { data, error } = useAddressValidation({
        region,
        province: selectedProvince,
        barangay: selectedBarangay,
        city: selectedCity,
        postal: postalCode,
    });

    useEffect(() => {
        if (onChange) {
            onChange({
                data: data,
                error: error,
            });
        }
    }, [data, error]);

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
                            handleChange(e.target.value);
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
                            handleChangeProvince(e.target.value);
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
                            handleChangeCity(e.target.value);
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
                            handleChangeBarangay(e.target.value);
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
                        value={postalCode}
                        onChange={(e) => {
                            setPostalCode(e.target.value);
                        }}
                        type="number"
                        placeholder="Enter Postal Code"
                    />
                </div>
            </div>
        </div>
    );
};

export default AddressForm;
