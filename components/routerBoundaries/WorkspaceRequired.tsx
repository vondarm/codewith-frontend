"use client"

import {PropsWithChildren, useEffect} from "react";
import {useWorkspace} from "@/entities/workspaces";
import {useRouter} from "next/navigation";
import {ROUTES} from "@/app/routes";
import {useLastWorkspaceId} from "@/entities/lastWorkspace";
import {useWorkspaceIdParam} from "@/app/(authenticated)/(with_workspace)/workspace/[id]/useWorkspaceIdParam";

export default function WithWorkspace({children}: PropsWithChildren) {
    const id = useWorkspaceIdParam()
    const {push} = useRouter()
    const {setLastWorkspaceId} = useLastWorkspaceId()
    const workspace = useWorkspace(Number(id))

    useEffect(() => {
        if (!workspace) push(ROUTES.WORKSPACE)
        else setLastWorkspaceId(id)
    }, [id, setLastWorkspaceId, workspace, push])

    return <>{children}</>
}
