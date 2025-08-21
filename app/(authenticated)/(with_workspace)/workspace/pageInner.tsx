import {useCurrentWorkspace} from "@/entities/workspaces";

export default function WorkspacePage() {
    const workspace = useCurrentWorkspace()

    return <>Content</>
}
