import {useCurrentWorkspace} from "@/entities/workspaces";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {ROUTES} from "@/app/routes";

export default function WorkspacePage() {
    const workspace = useCurrentWorkspace()
    const {push} = useRouter();

    useEffect(() => {
        if (workspace?.id)
            push(ROUTES.getWorkspaceSettingsRoute(workspace?.id))
    }, [push, workspace?.id]);

    return <>Content</>
}
