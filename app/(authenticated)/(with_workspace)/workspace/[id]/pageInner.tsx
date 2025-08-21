import {useWorkspace} from "@/entities/workspaces";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {ROUTES} from "@/app/routes";
import {useLastWorkspaceId} from "@/entities/lastWorkspace";

interface Props {
    id: number
}

export default function WorkspacePage({id}: Props) {
    const {push} = useRouter()
    const {setLastWorkspaceId} = useLastWorkspaceId()
    const workspace = useWorkspace(id)

    useEffect(() => {
        if (!workspace) push(ROUTES.WORKSPACE)
        else setLastWorkspaceId(id)
    }, [id, setLastWorkspaceId, workspace, push])

    return <>{workspace?.id}</>
}
