import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import React, { useEffect } from "react";

function RegisterForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        product_name: "",
        price: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("product.store"));
    };

    return (
        <form onSubmit={submit} >
            <div className="max-w-md p-6 mx-auto">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

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

                    <InputError message={errors.email} className="mt-2" />
                </div>

              
                <PrimaryButton className="mt-4" disabled={processing}>
                    Register Product
                </PrimaryButton>
            </div>
        </form>
    );
}

export default RegisterForm;
