import {useQueryClient, useSuspenseQuery} from "@tanstack/react-query";
import {useCallback} from "react";
import {RoomMemberApi} from "@/api/roomMember";

export const useRoomMembers = (roomId: number) => useSuspenseQuery({
    queryKey: ["roomMembers", roomId],
    queryFn: () => RoomMemberApi.fetchMembers(roomId)
})

export const useRevalidateRoomMembers = (roomId: number) => {
    const client = useQueryClient();

    return useCallback(
        () => client.refetchQueries({queryKey: ["roomMembers", roomId]}),
        [roomId, client]
    )
}

export const useRoomMember = (id: number) => {
    const {data} = useRoomMembers(id)
    return data.find(member => member.id !== id)
}
