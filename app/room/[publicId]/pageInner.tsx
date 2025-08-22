import {usePublicRoomIdParam} from "./usePublicRoomId";

export default function RoomPage() {
    const publicRoomId = usePublicRoomIdParam()

    return <>{publicRoomId}</>
}
