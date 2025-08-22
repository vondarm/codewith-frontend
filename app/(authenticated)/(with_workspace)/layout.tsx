"use client"

import {PropsWithChildren} from "react";
import dynamic from "next/dynamic";
import {SuspenseView} from "@/components/SuspenseView";

const WorkspacesRequired = dynamic(() => import("@/components/routerBoundaries/WorkspacesRequired"), {ssr: false});

export default function WithWorkspaceLayout({children}: PropsWithChildren) {
    return <SuspenseView>
        <WorkspacesRequired>
            {children}
        </WorkspacesRequired>
    </SuspenseView>
}
