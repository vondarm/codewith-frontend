"use client"

import {PropsWithChildren} from "react";
import dynamic from "next/dynamic";

const WorkspaceRequired = dynamic(() => import("@/components/routerBoundaries/WorkspaceRequired"), {ssr: false});

export default function WithWorkspaceLayout({children}: PropsWithChildren) {
    return <WorkspaceRequired>
        {children}
    </WorkspaceRequired>
}
