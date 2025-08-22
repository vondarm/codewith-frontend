import {FC} from "react";
import {WorkspaceMember} from "@/domain/workspaceMember";
import {Tag} from "antd";

interface Props {
    role: WorkspaceMember["role"]
}

export const RoleTag: FC<Props> = ({role}) => <Tag color={roleColor[role]}>
    {roleText[role]}
</Tag>

const roleText: Record<WorkspaceMember["role"], string> = {
    editor: "Editor",
    owner: "Owner",
    viewer: "Viewer",
}

const roleColor: Record<WorkspaceMember["role"], string> = {
    editor: "green",
    owner: "volcano",
    viewer: "blue"
}
