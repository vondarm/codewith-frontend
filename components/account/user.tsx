import {useMe} from "@/entities/me";
import {Avatar, Card, Dropdown, Flex, Typography} from "antd";
import {LogoutOutlined, UserOutlined} from '@ant-design/icons';
import {SuspenseView} from "@/components/SuspenseView";
import {ReactNode} from "react";
import {logout} from "@/api/auth/logout";
import {useQueryClient} from "@tanstack/react-query";
import {useRouter} from "next/navigation";
import {ROUTES} from "@/app/routes";

type MenuItem = {
    key: string,
    label: string,
    icon: ReactNode,
}

const menu: MenuItem[] = [
    {
        label: 'Logout',
        key: 'logout',
        icon: <LogoutOutlined/>
    }
]

export const User = () => {
    const {push} = useRouter()
    const client = useQueryClient()

    const logoutHandle = () => {
        logout();
        client.clear()
        push(ROUTES.LOGIN)
    }

    return <Dropdown
        menu={{items: menu, onClick: ({key}) => key === "logout" && logoutHandle()}}
        trigger={['click']}
    >
        <Card
            size={"small"}
            type={"inner"}
            styles={{body: {padding: 8}}}
            style={{width: 160, cursor: "pointer"}}
        >
            <SuspenseView>
                <UserInner/>
            </SuspenseView>
        </Card>
    </Dropdown>
}

const UserInner = () => {
    const {data: me} = useMe()

    return <Flex gap={"small"} align={"center"}>
        <Avatar size={"small"} style={{backgroundColor: '#87d068', flexShrink: 0}} icon={<UserOutlined/>}/>
        <Typography.Text ellipsis>{me.displayName || me.username || me.email}</Typography.Text>
    </Flex>
}
