import {axiosInstance} from "@/api/lib/apiClient";

const fetchMembers = async (workspaceId: string) => axiosInstance.get(
    "/workspace_member",
    {
        params: {workspaceId}
    }
)

type Role = "owner" | "editor" | "viewer"

const invite = async (workspaceId: string, userId: string, role: Role) => axiosInstance.post(
    "/workspace_member",
    {
        userId,
        workspaceId,
        role
    }
)

const remove = async (memberId: string) => axiosInstance.delete(
    `/workspace_member/${memberId}`,
)

const changeRole = async (memberId: string, role: Role) => axiosInstance.patch(
    `/workspace_member/${memberId}`,
    {
        role
    }
)

export const WorkspaceMemberApi = {
    fetchMembers,
    invite,
    remove,
    changeRole,
}
