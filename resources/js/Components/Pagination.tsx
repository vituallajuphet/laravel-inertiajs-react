import React from 'react'
import { Link } from '@inertiajs/react'

const splitText = (text: string) => {
    if(text?.split(' ')?.length == 2) {
         return text.includes('Previous') ?'Prev' : 'Next'
    }
    return text
    
}

const Pagination = (props) => {

    const {links} = props 

    return (
        <div className='flex-row gap-2 justify-center flex mt-6'>
            {links?.map((link) => {

                return <div className={`inline-flex rounded-md hover:bg-blue-400 hover:text-white  
                    ${link?.active ? ' bg-blue-400 text-white': 'text-gray-500 border-gray-300 border'}
                    ${!link?.url ? ' bg-gray-200' : ''}
                    `
                }>
                    <Link
                        disabled={!link?.url}
                        className='block p-1 px-3 ' 
                        href={link?.url}
                        preserveScroll
                    >
                        <span>
                            {splitText(link?.label)}
                        </span>
                    </Link>
                </div>
            })}
        </div>
    )
}
export default Pagination