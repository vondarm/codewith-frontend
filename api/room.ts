import {axiosInstance} from "@/api/lib/apiClient";
import {Room} from "@/domain/room";

const fetchWorkspaceRooms = async (workspaceId: string): Promise<[]> => axiosInstance.get(
    "/room",
    {params: {workspaceId}}
)

const create = async (workspaceId: string) => axiosInstance.post(
    "/room",
    {workspaceId}
)

const remove = async (roomId: string) => axiosInstance.delete(
    `/room/${roomId}`,
)

const update = async (room: Room) => axiosInstance.patch(`/workspace_member/${room.id}`, room)

export const WorkspaceMemberApi = {
    create,
    update,
    remove,
    fetchWorkspaceRooms,
}
