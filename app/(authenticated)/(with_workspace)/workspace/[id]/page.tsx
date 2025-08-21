"use client"

import {useParams} from "next/navigation";
import dynamic from "next/dynamic";
import {SuspenseView} from "@/components/SuspenseView";

const WorkspacePage = dynamic(() => import("./pageInner"))

export default function Workspace() {
    const {id} = useParams()

    return <SuspenseView>
        <WorkspacePage id={Number(id)}/>
    </SuspenseView>
}
