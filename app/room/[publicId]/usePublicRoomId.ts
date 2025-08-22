import {useParams} from "next/navigation";

export const usePublicRoomIdParam = (): string => {
    const {publicId} = useParams()
    
    return publicId
}
