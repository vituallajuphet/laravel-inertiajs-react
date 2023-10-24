import React, { useEffect, useMemo, useState } from 'react'
import regions from './jsons/region.json'
import provinces from './jsons/province.json'
import cities from './jsons/city.json'
import brgy from './jsons/barangay.json'
import _ from 'lodash'

const AddressForm = () => {

  const [region, setRegion] = useState<any>(regions[0]);
  const [selectedProvince, setSelectedProvince] = useState<any>({});
  const [selectedCity, setSelectedCity] = useState<any>({});

  const handleChange = (value?: string) =>  {
        setRegion(regions.find(reg => reg?.region_code === value) )
  }

  const memProvinces = useMemo(() => {
    if(!region?.region_code) return []
    const xx =  provinces.filter(pro => pro.region_code === region?.region_code)
    return _.sortBy(xx, ['province_name'])

  }, [region?.region_code])

  const handleChangeProvince = (value?: string) =>  {
    setSelectedProvince(memProvinces.find(pro => pro?.province_code === value) )
  }

  const handleChangeCity = (value?: string) =>  {
    setSelectedCity(cities.find(city => city?.city_code === value) )
  }

  const memCity = useMemo(() => {
    if(!selectedProvince?.province_code) return []
    const xx =  cities.filter(city => city.province_code === selectedProvince.province_code)
    return _.sortBy(xx, ['city_name'])

  }, [selectedProvince])

  const memBarangay = useMemo(() => {
    if(!selectedCity?.city_code) return []
    //@ts-ignore
    const xx =  brgy.filter(bg => bg.city_code === selectedCity.city_code)
    return _.sortBy(xx, ['brgy_name'])

  }, [selectedCity])

  return (
    <div>
        <div className='flex-col flex'>
            <label htmlFor="region">region</label>
            <select id='region' name='region' onChange={(e) => {
                handleChange(e.target.value)
            }}>
               {regions.map(region => {
                 return <option key={region.id} value={region.region_code}>{region.region_name}</option>
               })}
            </select>
        </div>
        <div className='flex-col flex mt-3'>
            <label htmlFor="province">Province</label>
            <select id='province' name='province' onChange={(e) => {
                handleChangeProvince(e.target.value)
            }}>
               {memProvinces.map(province => {
                 return <option key={province.province_code} value={province.province_code}>{province.province_name}</option>
               })}
            </select>
        </div>
        <div className='flex-col flex mt-3'>
            <label htmlFor="city_municipality">City / Municipality</label>
            <select id='city_municipality' name='city_municipality' onChange={(e) => {
                handleChangeCity(e.target.value)
            }}>
               {memCity.map(city => {
                 return <option key={city.city_code} value={city.city_code}>{city.city_name}</option>
               })}
            </select>
        </div>
        <div className='flex-col flex mt-3'>
            <label htmlFor="barangay">Baragay</label>
            <select id='barangay' name='barangay' onChange={(e) => {
                // handleChange('city', e.target.value)
            }}>
               {memBarangay.map(bg => {
                 return <option key={bg.brgy_code} value={bg.brgy_code}>{bg.brgy_name}</option>
               })}
            </select>
        </div>
    </div>
  )
}

export default AddressForm