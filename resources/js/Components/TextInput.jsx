import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();
    const isDisabledCls = props.disabled ? 'text-gray-500 border-gray-200 bg-gray-100' : 'border-gray-300'

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={` focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm 
                ${className} 
                ${isDisabledCls}`}
            ref={input}
        />
    );
});
