"use client"

import {useParams} from "next/navigation";
import dynamic from "next/dynamic";
import {SuspenseView} from "@/components/SuspenseView";

const WorkspaceSettings = dynamic(() => import("./pageInner"))

export default function Settings() {
    const {id} = useParams()

    return <SuspenseView>
        <WorkspaceSettings id={Number(id)}/>
    </SuspenseView>
}
