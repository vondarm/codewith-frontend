"use client"

import dynamic from "next/dynamic";
import {SuspenseView} from "@/components/SuspenseView";
import {useWorkspaceIdParam} from "@/app/(authenticated)/(with_workspace)/workspace/[id]/useWorkspaceIdParam";

const WorkspaceSettings = dynamic(() => import("./pageInner"))

export default function Settings() {
    const workspaceId = useWorkspaceIdParam()

    return <SuspenseView>
        <WorkspaceSettings id={workspaceId}/>
    </SuspenseView>
}
