"use client"

import {AuthRequired} from "@/components/routerBoundaries/AuthRequired";
import {SuspenseView} from "@/components/SuspenseView";
import {useMyWorkspaces} from "@/entities/workspaces";
import dynamic from "next/dynamic";

export default function Workspace() {
    return <AuthRequired>
        <SuspenseView>
            <DynamicWorkspace/>
        </SuspenseView>
    </AuthRequired>
}

const WorkspacePageInner = () => {
    const {data: workspaces} = useMyWorkspaces()
    return null
}

const DynamicWorkspace = dynamic(async () => WorkspacePageInner, {ssr: false})
