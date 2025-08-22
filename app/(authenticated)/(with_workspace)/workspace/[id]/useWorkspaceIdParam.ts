import {useParams} from "next/navigation";

export const useWorkspaceIdParam = () => {
    const {id} = useParams()
    return Number(id)
}
