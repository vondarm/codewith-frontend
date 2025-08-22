import {useWorkspaceIdParam} from "@/app/(authenticated)/(with_workspace)/workspace/[id]/useWorkspaceIdParam";
import {useRooms} from "@/entities/rooms";
import {RoomsTable} from "@/components/rooms/roomsTable";

export default function WorkspaceRoomsPage() {
    const workspaceId = useWorkspaceIdParam()
    const {data: rooms} = useRooms(workspaceId)

    return <RoomsTable workspaceId={workspaceId} rooms={rooms}/>
}
