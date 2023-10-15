import React, { useEffect, useState } from "react";
import { router } from "@inertiajs/react";
import LogoSkeleton from "./Skeleton/Headers/LogoSkeleton";

export default function ApplicationLogo(props) {
    const isDark = props.isDarkMode;

    return (
        <img
            className="max-w-[150px] w-full block"
            src={`/images/logo/${isDark ? "logo-dark.png" : "logo-white.png"}`}
            alt="Buynimo Logo"
        />
    );
}
