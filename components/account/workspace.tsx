import {Avatar, Card, Dropdown, Flex, Typography} from "antd";
import {DatabaseOutlined, PlusCircleOutlined} from '@ant-design/icons';
import {SuspenseView} from "@/components/SuspenseView";
import {ReactNode} from "react";
import {useCurrentWorkspace, useMyWorkspaces} from "@/entities/workspaces";
import {useRouter} from "next/navigation";
import {ROUTES} from "@/app/routes";

const CREATE_WORKSPACE_ACTION = "__createWorkspaceAction";

type MenuItem = {
    key: string,
    label: string,
    icon: ReactNode,
}

export const Workspace = () => {

    const {push} = useRouter()
    const {data: workspaces} = useMyWorkspaces()
    const currentWorkspace = useCurrentWorkspace()
    if (!currentWorkspace) {
        return null
    }

    const handler = ({key}: { key: string }) => {
        if (key === CREATE_WORKSPACE_ACTION)
            push(ROUTES.CREATE_WORKSPACE)
        else
            push(ROUTES.getWorkspaceSettingsRoute(key))
    }

    const items: MenuItem[] = [
        ...workspaces.map(workspace => ({
            key: workspace.id,
            label: workspace.name,
        })).filter(workspace => workspace.key !== currentWorkspace?.id),
        {
            key: CREATE_WORKSPACE_ACTION,
            label: "Create New",
            icon: <PlusCircleOutlined/>
        }
    ]

    return <Dropdown
        menu={{items: items, onClick: handler}}
        trigger={['click']}
    >
        <Card
            size={"small"}
            type={"inner"}
            styles={{body: {padding: 8}}}
            style={{width: 160, cursor: "pointer"}}
        >
            <SuspenseView>
                <WorkspaceInner/>
            </SuspenseView>
        </Card>
    </Dropdown>
}

const WorkspaceInner = () => {
    const workspace = useCurrentWorkspace()

    return <Flex gap={"small"} align={"center"}>
        <Avatar
            shape="square"
            size={"small"}
            style={{backgroundColor: '#87d068', flexShrink: 0}}
            icon={<DatabaseOutlined/>}
        />
        <Typography.Text ellipsis>{workspace.name}</Typography.Text>
    </Flex>
}
