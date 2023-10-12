import { Head } from '@inertiajs/react'
import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Store = (props) => {

  const {auth, store} = props

  const {data}= store

  return (
    <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{store.store_name}</h2>}
        >
    <Head title="Dashboard" />

    <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">Store page</div>
                 <div className='p-6'>
                    Store ID: {store?.uuid}
                 </div>
                 <div className='p-6'>
                    Store Nick Name: {store?.store_nickname}
                 </div>
            </div>
        </div>
    </div>
</AuthenticatedLayout>
  )
}

export default Store