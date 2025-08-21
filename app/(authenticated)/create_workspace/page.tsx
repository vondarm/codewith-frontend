"use client"

import dynamic from "next/dynamic";
import {SuspenseView} from "@/components/SuspenseView";

const CreateWorkspacePage = dynamic(() => import("./pageInner"), {ssr: false})

export default function CreateWorkspace() {
    return <SuspenseView><CreateWorkspacePage/></SuspenseView>
}