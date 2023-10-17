import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import React, { useEffect } from "react";

type FormType  = {
    product_name: string
    price?: number
    store_id: string
    files?: FileList | [] | null
}

function RegisterForm(props) {
    const { data, setData, post, processing, errors, reset } = useForm<FormType>({
        product_name: "",
        price: 0,
        store_id: '',
        files: []
    });

    useEffect(() => {
        setData('store_id', props?.store?.store_id)
    }, [props?.store?.store_id])

    const submit = (e) => {
        e.preventDefault();
        post(route("product.store"), {
            onSuccess: (res) => {
                console.log("success", res)
                setData({
                    price: 0,
                    product_name: '',
                    store_id:'',
                })
            }
        })
    };

    return (
        <form onSubmit={submit}  encType="multipart/form-data">
            <div className="max-w-md p-6 mx-auto">
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <input type="file" onChange={(e) => {
                        const files = e.target.files
                        setData('files',  files)
                    }}  multiple/>
                    <TextInput
                        id="product_name"
                        name="product_name"
                        value={data.product_name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("product_name", e.target.value)}
                        required
                    />

                    <InputError message={errors.product_name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="price" value="Price" />
                    <TextInput
                        id="email"
                        type="text"
                        name="price"
                        value={data.price}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("price", e.target.value)}
                        required
                    />
                </div>

              
                <PrimaryButton className="mt-4" disabled={processing}>
                    Register Product
                </PrimaryButton>
            </div>
        </form>
    );
}

export default RegisterForm;
