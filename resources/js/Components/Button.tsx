const Button = ({
    className = "",
    disabled,
    children,
    variant = "solid",
    icon = undefined,
    ...props
}: any) => {
    const btnClass =
        variant === "outlined"
            ? "border-gray-300 border text-gray-900"
            : "bg-primary-default border border-transparent text-white hover:bg-gray-700 active:bg-gray-900";

    return (
        <button
            {...props}
            className={
                `inline-flex w-full gap-3 justify-center items-center px-4 py-3 hover:opacity-50  rounded-md font-semibold text-xs  uppercase tracking-widest   focus:outline-none transition ease-in-out duration-150 ${
                    disabled && "opacity-25"
                } ` +
                className +
                ` ${btnClass}`
            }
            disabled={disabled}
        >
            {icon && icon}
            {children}
        </button>
    );
};

export default Button;
