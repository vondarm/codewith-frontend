"use client"

import {useRouter} from "next/navigation";
import {ROUTES} from "@/app/routes";
import {useEffect} from "react";

export default function Home() {
    const {push} = useRouter();
    
    useEffect(() => {
        push(ROUTES.WORKSPACE)
    }, [push]);

    return null;
}
