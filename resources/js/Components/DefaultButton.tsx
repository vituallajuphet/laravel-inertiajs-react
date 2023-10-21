export default function DefaultButton({
    className = "",
    disabled,
    size ='lg',
    children,
    ...props
}: any) {

    const clsSize = size === 'lg' ? 'px-4 py-3' : 'px-2 py-2'
 
    return (
        <button
            {...props}
            className={
                `inline-flex w-full justify-center items-center hover:opacity-25 bg-primary-default border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && "opacity-25"
                } ${clsSize} ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
