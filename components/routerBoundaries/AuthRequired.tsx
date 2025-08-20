"use client"

import {FC, memo, PropsWithChildren, useEffect} from "react";
import {useRouter} from "next/navigation";
import {ROUTES} from "@/app/routes";

export const AuthRequired: FC<PropsWithChildren> = memo(function AuthRequired({children}) {
    const {push} = useRouter()

    useEffect(() => {
        if (!localStorage.getItem('accessToken'))
            push(ROUTES.LOGIN)
    }, [push])

    return <>{children}</>
})
