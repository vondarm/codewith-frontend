import {axiosInstance} from "@/api/lib/apiClient";
import {Room} from "@/domain/room";
import {mapApiResponse, mapApiResponseWithErrors} from "@/api/lib/mapResponse";

const fetchWorkspaceRooms = async (workspaceId: string) => mapApiResponse<Room[]>(axiosInstance.get(
    "/room",
    {params: {workspaceId}}
))

type CreateRoomPayload = {
    name: string
    environmentId: string
    workspaceId: number
}

const create = async (workspaceId: number, name: string, environmentId: string) => mapApiResponseWithErrors<
    Room,
    Record<(keyof CreateRoomPayload) | "nonFieldErrors", string[]>
>(axiosInstance.post(
    "/room",
    {
        workspaceId,
        name,
        environmentId
    } satisfies CreateRoomPayload
))

const remove = async (roomId: string) => axiosInstance.delete(
    `/room/${roomId}`,
)

const update = async (room: Room) => mapApiResponse<Room>(axiosInstance.patch(`/room/${room.id}`, room))

export const RoomApi = {
    create,
    update,
    remove,
    fetchWorkspaceRooms,
}
