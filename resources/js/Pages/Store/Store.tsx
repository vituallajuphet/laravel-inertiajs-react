import { Head } from '@inertiajs/react'
import React, { useState } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { FaPlus } from 'react-icons/fa';
import Product from './Components/Product';
import RegisterForm from './Components/RegisterForm';

const Store = (props) => {

  const {auth, store, products} = props
  const [showAdd, setShowAdd] = useState(false);

  const {data}= store

  return (
    <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{store.store_name}</h2>}
        >
    <Head title="Dashboard" />

    <div className="py-12">
        <div className="max-w-8xl mx-auto flex flex-row gap-4 sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">Store page</div>
                 <div className='p-6'>
                    Store ID: {store?.store_id}
                 </div>
                 <div className='p-6'>
                    Store Nick Name: {store?.store_nickname}
                 </div>
            </div>
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg flex-1">
                <div className='flex justify-end p-6'>
                  <button 
                    onClick={() => {
                      setShowAdd(prev => !prev)
                    }}
                    className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded flex items-center justify-center gap-2" 
                    type="button"
                  >
                      <FaPlus />
                      Add Product
                  </button>
                </div>
                <div className='p-6 flex flex-row gap-2'>
                </div>
                <div>
                  {showAdd ? <RegisterForm /> : null }   
                </div>

                <div className='mt-6 flex flex-row justify-center gap-5 pb-6 px-6'>
                   {
                     products?.map(prod => {
                      return <Product 
                        {...prod}
                      />
                     })

                     
                   }
                   {!products?.length ? (
                    <div>No Products</div>
                   ) : null}
                </div>
            </div>
        </div>
    </div>
</AuthenticatedLayout>
  )
}

export default Store