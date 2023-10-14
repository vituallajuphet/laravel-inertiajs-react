import React, { useMemo, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

type ProductType = {
    [key: string]: any;
    product: any[];
};

function Product(props: ProductType) {
    const { auth, product, url } = props;
    const prod = product?.length ? product[0] : [];
    const [selectedImage, setSelectedImage] = useState<number>(0)

    const memImages = useMemo(() => {
        try {
            const imgs =  JSON.parse(prod?.product_images)
            return imgs
        } catch (error) {
            return []
        } 

    }, [prod?.product_images])

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {prod?.product_name}
                </h2>
            }
        >
            <Head title={prod.product_name} />
            <div className="mt-6 mx-auto max-w-7xl bg-white p-6 shadow-sm rounded-sm">
                <div className="flex flex-row justify-between gap-12">
                    <div className="max-w-[50%] border-gray-200 p-4 border rounded-sm w-full flex flex-col justify-center items-center ">
                        <div className="mb-4 bg-gray-100 p-4">
                            <img 
                                src={`${url}/storage/thumbnails/${memImages[selectedImage].product_name}`}  
                            />
                        </div>
                        <div className="flex flex-row gap-2 justify-center w-full cursor-pointer hover:scale">
                            {memImages?.map((img, i) => (
                                <div 
                                    onClick={() => {
                                        setSelectedImage(i)
                                    }}
                                    className={`w-24 rounded-md bg-origin-content h-24 p-2 bg-center  bg-contain bg-no-repeat  border transition duration-500 hover:scale-110 ${i === selectedImage ? 'border-blue-400' : 'border-gray-200'}`} 
                                    style={{
                                        backgroundImage: `url('${url}/storage/thumbnails/${img.product_name}')`
                                    }}
                                    
                                >
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col">
                        <h2 className="text-2xl font-bold mb-2">
                            {prod?.product_name}
                        </h2>
                        <h3 className="text-md  mb-2 text-gray-600">Short Description</h3>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Product;
