import { useState, type FC } from "react";
import { Button, type ButtonProps } from "./button";

export const ButtonWithState: FC<ButtonProps & {
    appCount: number
}> = ({ appCount }) => {
    const [buttonCount, setButtonCount] = useState(0);

    return (
        <Button onClick={() => setButtonCount(buttonCount + 1)}>{buttonCount + appCount}</Button>
    )
}