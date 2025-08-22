"use client"

import dynamic from "next/dynamic";
import {SuspenseView} from "@/components/SuspenseView";

const RoomPage = dynamic(() => import("./pageInner"), {ssr: false})

export default function Room() {
    return <SuspenseView><RoomPage/></SuspenseView>
}
