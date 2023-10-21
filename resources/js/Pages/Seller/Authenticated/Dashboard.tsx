import React from "react";
import MerchantAuthenticatedLayout from "@/Layouts/MerchantAuthenticatedLayout";
import { Head } from "@inertiajs/react";

function Dashboard(props) {
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
            <Head title="Dashboard" />
            <div className="h-[2000px]">
                Dashboard
            </div>
        </MerchantAuthenticatedLayout>
    );
}

export default Dashboard;
