"use client"

import {FC, memo, PropsWithChildren, useEffect} from "react";
import {useMyWorkspaces} from "@/entities/workspaces";
import {useRouter} from "next/navigation";
import {ROUTES} from "@/app/routes";

export const WorkspaceRequired: FC<PropsWithChildren> = memo(function AuthRequired({children}) {
    const {data: workspaces} = useMyWorkspaces()
    const {push} = useRouter()

    useEffect(() => {
        if (!workspaces.length)
            push(ROUTES.WORKSPACE)
    }, [push, workspaces])

    return <>{children}</>
})
