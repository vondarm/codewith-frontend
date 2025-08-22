"use client"

import {PropsWithChildren, useEffect} from "react";
import {useMyWorkspaces} from "@/entities/workspaces";
import {useRouter} from "next/navigation";
import {ROUTES} from "@/app/routes";

export default function WorkspacesRequired({children}: PropsWithChildren) {
    const {data: workspaces} = useMyWorkspaces()
    const {push} = useRouter()

    useEffect(() => {
        if (!workspaces.length)
            push(ROUTES.CREATE_WORKSPACE)
    }, [push, workspaces])

    return <>{children}</>
}
