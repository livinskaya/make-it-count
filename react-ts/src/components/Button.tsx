import type React from "react";
import { type FC } from "react";

export type ButtonProps = React.ComponentPropsWithRef<"button">;

export const buttonStyleClasses = "bg-pink-300/50 hover:shadow-neutral-50 shadow-md text-white rounded-lg p-1";

export const Button: FC<ButtonProps> = (props) => {
    const { className, ...propsWithoutClassName } = props;

    return (
        <button {...propsWithoutClassName} className={`${buttonStyleClasses} ${className}`} />
    )
}