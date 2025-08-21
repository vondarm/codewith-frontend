"use client"

import dynamic from "next/dynamic";
import {SuspenseView} from "@/components/SuspenseView";

const WorkspacePage = dynamic(() => import("./pageInner"), {ssr: false})

export default function Workspace() {
    return <SuspenseView><WorkspacePage/></SuspenseView>
}
