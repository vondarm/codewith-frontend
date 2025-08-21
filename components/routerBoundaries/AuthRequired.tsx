"use client"

import {PropsWithChildren, useEffect} from "react";
import {useRouter} from "next/navigation";
import {useMe} from "@/entities/me";
import {ROUTES} from "@/app/routes";

export default function AuthRequired({children}: PropsWithChildren) {
    const {push} = useRouter()
    const {error} = useMe()

    useEffect(() => {
        if (error?.status === 401) push(ROUTES.LOGIN)
    }, [error, push])

    return <>{children}</>
}
