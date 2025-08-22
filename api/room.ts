import {axiosInstance} from "@/api/lib/apiClient";
import {Room} from "@/domain/room";
import {mapApiResponse} from "@/api/lib/mapResponse";

const fetchWorkspaceRooms = async (workspaceId: string) => mapApiResponse<Room[]>(axiosInstance.get(
    "/room",
    {params: {workspaceId}}
))

const create = async (workspaceId: string) => mapApiResponse<Room>(axiosInstance.post(
    "/room",
    {workspaceId}
))

const remove = async (roomId: string) => axiosInstance.delete(
    `/room/${roomId}`,
)

const update = async (room: Room) => mapApiResponse<Room>(axiosInstance.patch(`/workspace_member/${room.id}`, room))

export const WorkspaceMemberApi = {
    create,
    update,
    remove,
    fetchWorkspaceRooms,
}
