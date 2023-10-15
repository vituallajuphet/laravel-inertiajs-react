import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function LogoSkeleton() {
    return (
        <div className="w-full">
            <Skeleton width={150} height={30} />
        </div>
    );
}

export default LogoSkeleton;
