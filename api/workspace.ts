import {axiosInstance} from "@/api/lib/apiClient";
import {mapApiResponse} from "@/api/lib/mapResponse";
import {Workspace} from "@/domain/workspace";

const fetchWorkspaces = async () => mapApiResponse<Workspace[]>(axiosInstance.get("/workspace"))
const create = async (name: string) => axiosInstance.post(
    "/workspace",
    {name}
)
const remove = async (workspaceId: string) => axiosInstance.delete(`/workspace/${workspaceId}`)
const rename = async (workspaceId: string, name: string) => axiosInstance.patch(
    `/workspace/${workspaceId}`,
    {name}
)

export const WorkspaceApi = {
    rename,
    create,
    remove,
    fetchWorkspaces
}
