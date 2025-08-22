import {axiosInstance} from "@/api/lib/apiClient";
import {mapApiResponse, mapApiResponseWithErrors} from "@/api/lib/mapResponse";
import {WorkspaceMember} from "@/domain/workspaceMember";

const fetchMembers = async (workspaceId: number) => mapApiResponse<WorkspaceMember[]>(axiosInstance.get(
    "/workspace_member",
    {params: {workspaceId}}
))

type Role = WorkspaceMember["role"]

type InvitePayload = {
    email: string,
    workspaceId: number
    role: Role
}

const invite = async (workspaceId: number, email: string, role: Role) => mapApiResponseWithErrors<
    WorkspaceMember,
    Record<(keyof InvitePayload) | "nonFieldErrors", string[]>
>(axiosInstance.post(
    "/workspace_member",
    {
        email,
        workspaceId,
        role
    } satisfies InvitePayload
))

const remove = async (memberId: string) => axiosInstance.delete(
    `/workspace_member/${memberId}`,
)

const changeRole = async (memberId: string, role: Role) => axiosInstance.patch(
    `/workspace_member/${memberId}`,
    {role}
)

export const WorkspaceMemberApi = {
    fetchMembers,
    invite,
    remove,
    changeRole,
}
