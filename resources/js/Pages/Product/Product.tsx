import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react'

type ProductType = {
    [key: string] : any
    product: any[]
}

function Product(props: ProductType) {

 const  {auth, product} = props
 const prod = product?.length  ? product : [];

  return (
    <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{}</h2>}
    >
    <Head title="Dashboard" />
        <div>
            
        </div>
    </AuthenticatedLayout>
  )
}

export default Product