import { useEffect, type FC } from "react";

export const ExtensionContext: FC = () => {
    useEffect(() => {
        console.log("extension context has been mounted");
    }, []);
    return null;
}