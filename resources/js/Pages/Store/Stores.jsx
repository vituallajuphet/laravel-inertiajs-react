import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';

export default function Stores({ auth, data }) {
    const user = usePage().props.auth.user;

    const { data: dd, setData, delete: destroy, errors, processing, recentlySuccessful } = useForm({

    });

    const handleDelete = (uuid) => {
        destroy(route('store.destroy', {
            uuid: uuid
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
                            {data?.length ? (
                                    <div className='flex flex-row flex-wrap gap-4'>
                                        {
                                            data.map(d => {
                                                return (
                                                    <div key={d.uuid}
                                                        className='relative sm:w-[23.7%] bg-gray-100 overflow-hidden shadow-sm sm:rounded min-h-[12rem] p-5'
                                                    >
                                                        <div className='font-semibold'>{d.store_name}</div>

                                                        <button type='button' onClick={() => {
                                                            handleDelete(d.uuid)
                                                        }} className='absolute right-2 top-2'>Delete</button>

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
                         </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
