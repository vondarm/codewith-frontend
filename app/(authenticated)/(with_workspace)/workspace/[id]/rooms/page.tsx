"use client"

import dynamic from "next/dynamic";
import {SuspenseView} from "@/components/SuspenseView";

const WorkspaceRooms = dynamic(() => import("./pageInner"))

export default function Rooms() {
    return <SuspenseView>
        <WorkspaceRooms/>
    </SuspenseView>
}
