import React from "react";
import MerchantAuthenticatedLayout from "@/Layouts/MerchantAuthenticatedLayout";
import { Head } from "@inertiajs/react";
import DefaultButton from "@/Components/DefaultButton";

function Products(props) {
    const { auth } = props;

    return (
        <MerchantAuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard Seller
                </h2>
            }
        >
            <Head title="Products" />
            <div className="">
                <div className="flex  items-center mb-6">
                    <DefaultButton className='max-w-[160px]'>
                        Add Button
                    </DefaultButton>
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-200">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Created Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Last Updated
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {products?.map((prod) => {
                        return (
                            <tr key={prod.product_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {prod.product_id}
                                </th>
                                <td className="px-6 py-4">{prod.product_name}</td>
                                <td className="px-6 py-4">${prod.price}</td>
                                <td className="px-6 py-4">{
                                    moment(prod.created_at, "YYYYMMDD").fromNow()
                                }</td>
                                <td className="px-6 py-4">{
                                    moment(prod.updated_at, "YYYYMMDD").fromNow()
                                }</td>
                                <td className="px-6 py-4 text-right">
                                    <div>   
                                        <Link
                                            href={`${url}/store/${store_id}/product/${prod.product_id}`}
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            View
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        );
                    })} */}
                    </tbody>
                </table>
            </div>
        </MerchantAuthenticatedLayout>
    );
}

export default Products;
