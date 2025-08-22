import {RoleTag} from "@/components/workspaceMembers/RoleTag";
import {Button, Popconfirm, Space, Table} from "antd";
import {FC, useCallback, useMemo} from "react";
import {WorkspaceMember} from "@/domain/workspaceMember";
import {InviteForm} from "@/components/workspaceMembers/InviteForm";
import {WorkspaceMemberApi} from "@/api/workspaceMember";
import {useRevalidateWorkspaceMembers} from "@/entities/workspaceMembers";

interface DataType {
    key: number;
    email: string;
    displayName: number;
    role: "owner" | "editor" | "viewer"
}

const createColumns = (removeMember: (id: number) => void): TableProps<DataType>['columns'] => [
    {
        title: 'Name',
        dataIndex: 'displayName',
        key: 'displayName',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Role',
        key: 'role',
        dataIndex: 'role',
        render: (_, {role}) => <RoleTag role={role}/>,
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            record.role === "owner"
                ? null
                : <Space size="middle">
                    <Popconfirm
                        title={`Remove ${record.email} from this workspace`}
                        description="Are you sure to delete this member?"
                        onConfirm={() => removeMember(record.id)}
                        onCancel={() => void 0}
                        okText="Yes"
                        cancelText="Cancel"
                    >
                        <Button danger>Remove</Button>
                    </Popconfirm>
                </Space>
        ),
    },
];

interface Props {
    members: WorkspaceMember[];
    workspaceId: number
}

export const MembersTable: FC<Props> = ({members, workspaceId}) => {

    const revalidateMembers = useRevalidateWorkspaceMembers(workspaceId)

    const removeMember = useCallback(
        async (id: number) => {
            await WorkspaceMemberApi.remove(id)
            await revalidateMembers()
        },
        [revalidateMembers]
    )
    const columns = useMemo(() => createColumns(removeMember), [removeMember])
    
    return <Space direction="vertical" style={{flex: 1}}>
        <Table<DataType> columns={columns} dataSource={members.map(member => ({...member, key: member.id}))}/>
        <InviteForm workspaceId={workspaceId}/>
    </Space>
}
