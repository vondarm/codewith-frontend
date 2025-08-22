import {useRouter} from "next/navigation";
import {useWorkspaceMembers} from "@/entities/workspaceMembers";
import {MembersTable} from "@/components/workspaceMembers/MembersTable";

interface Props {
    id: number
}

export default function WorkspaceSettingsPage({id}: Props) {
    const {push} = useRouter()
    const {data} = useWorkspaceMembers(id)

    return <MembersTable members={data} workspaceId={id}/>
}
