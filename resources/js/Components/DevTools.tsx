import React from "react";

const DevTools = (props) => {
    console.log("props", props);

    return (
        <div className="fixed bottom-0 w-full bg-red-200 h-20 p-2">
            <h2 className="text-lg">
                Component Render:{" "}
                <span className="font-bold">
                    {props?.initialPage?.component}
                </span>
            </h2>
        </div>
    );
};

export default DevTools;
