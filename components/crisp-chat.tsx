"use client";

import { useEffect } from "react";
import {Crisp} from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(()=>{
        Crisp.configure("70438222-2eb5-4b50-9146-0c9919cd6dea");
    },[]);
    return null;
}
