'use client'
import React from 'react';

const Button = ({ variant = "contained", onClick, text }) => {
    const baseClasses =
        "rounded-[5px] border border-main flex justify-center items-center gap-[10px] px-[32px] py-[5px] cursor-pointer";

    const containedClasses = "bg-main text-white";
    const outlinedClasses = "bg-white text-main";

    const classes =
        variant === "outlined"
            ? `${baseClasses} ${outlinedClasses}`
            : `${baseClasses} ${containedClasses}`;

    return (
        <button className={classes} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
