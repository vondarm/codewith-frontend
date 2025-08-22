import {axiosInstance} from "@/api/lib/apiClient";
import {mapApiResponse, mapApiResponseWithErrors} from "@/api/lib/mapResponse";
import {RoomMember} from "@/domain/roomMember";

const fetchMembers = async (roomId: number) => mapApiResponse<RoomMember[]>(axiosInstance.get(
    "/room_member",
    {params: {roomId}}
))

type JoinPayload = {
    userId?: string
    displayName?: string
    roomId?: string
}

const join = async (roomId: string, userId: string, displayName?: string) => mapApiResponseWithErrors<
    RoomMember,
    Record<(keyof JoinPayload) | "nonFieldErrors", string[]>
>(axiosInstance.post(
    "/room_member",
    {
        userId,
        roomId,
        displayName
    } satisfies JoinPayload
))

const remove = async (memberId: string) => axiosInstance.delete(
    `/room_member/${memberId}`,
)

export const RoomMemberApi = {
    fetchMembers,
    join,
    remove,
}
