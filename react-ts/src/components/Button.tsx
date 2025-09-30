import type { FC } from "react";

type ButtonProps = {
    name: string;
    onPress: () => void;
}

export const Button: FC<ButtonProps> = ({ name, onPress }) => {
    return (
        <button onClick={onPress} className='bg-pink-300/50 hover:shadow-neutral-50 shadow-md text-white rounded-lg p-1'>{name}</button>
    )

}