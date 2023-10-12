import Pagination from '@/Components/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage,  } from '@inertiajs/react';
import React from 'react';
import  {FaStore, FaTrash, FaEdit} from 'react-icons/fa'


const Stores = (props)  => {

    const {data, auth} = props
    const { delete: destroy, get} = useForm({

    })

    const {data: stores, links } = data

    const navigateStore = (id: string) => {
        get(route('store.show',{
            store_id: id
        }))
    }

    const handleDelete = (uuid: string) => {
        destroy(route('store.destroy', {
            store_id: uuid
        }))
    }
    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Storepage</div>
                         <div className='p-6'>
                            {stores?.length ? (
                                    <div className='flex flex-row flex-wrap gap-4'>
                                        {
                                            stores.map(d => {
                                                return (
                                                    <div key={d.store_id}
                                                        className='relative cursor-pointer group sm:w-[23.7%] bg-[#2222] bg-gray-100 overflow-hidden shadow-sm sm:rounded min-h-[12rem] p-5'
                                                        onClick={() => {
                                                            navigateStore(d.store_id)
                                                        }}
                                                        >
                                                        <div className='font-semibold flex flex-row items-center gap-2'> 
                                                            <FaStore size={20} color='#69b4f0'/>
                                                            <span className='text-sm text-gray-700'> {d.name}</span>
                                                        </div>
                                                        <div className='absolute opacity-0 bottom-0 right-0 bg-blue-300 w-full group-hover:opacity-100 transition duration-150 ease-out hover:ease-in'>
                                                            
                                                        {/* <button type='button' onClick={() => {
                                                            handleDelete(d.id)
                                                        }} className='absolute right-2 top-2'>Delete</button> */}
                                                            <div className='flex  flex-row p-2 text-white gap-3 justify-end'>
                                                                <FaTrash className='text-red-600' />
                                                                <FaEdit />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    ) : 
                                    <div>
                                        no data
                                    </div>
                                }
                                <div>
                                 <Pagination links={links}/>
                                </div>
                         </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


export default Stores