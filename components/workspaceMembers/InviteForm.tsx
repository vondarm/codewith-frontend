import {FC} from "react";
import {Button, Form, Input, Select} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {WorkspaceMemberApi} from "@/api/workspaceMember";
import {WorkspaceMember} from "@/domain/workspaceMember";
import {useRevalidateWorkspaceMembers} from "@/entities/workspaceMembers";
import {useForm} from "antd/lib/form/Form";

interface Props {
    workspaceId: number
}

type FieldType = {
    email: string;
    role: WorkspaceMember["role"]
};

export const InviteForm: FC<Props> = ({workspaceId}) => {

    const revalidateMembers = useRevalidateWorkspaceMembers(workspaceId)
    const [form] = useForm()

    const onFinish = async ({email, role}: FieldType) => {
        const res = await WorkspaceMemberApi.invite(workspaceId, email, role)
        if (res.type === "success") {
            await revalidateMembers()
        } else {
            form.setFields([
                {name: "email", errors: [...(res.data.email || []), ...(res.data.nonFieldErrors || [])]},
                {name: "role", errors: res.data.role},
            ])
        }
    };

    return <Form
        form={form}
        name="inviteMember"
        layout="inline"
        onFinish={onFinish}
        initialValues={{role: "viewer"}}
    >
        <Form.Item<FieldType>
            name="email"
            rules={[
                {required: true, message: 'Please input email to invite!'},
                {type: "email", message: 'Please input correct email!'},
            ]}
        >
            <Input prefix={<UserOutlined/>} placeholder="Email"/>
        </Form.Item>
        <Form.Item<FieldType> name="role">
            <Select<FieldType["role"]>
                style={{width: 120}}
                options={[
                    {value: 'owner', label: 'Owner'},
                    {value: 'editor', label: 'Editor'},
                    {value: 'viewer', label: 'Viewer'}
                ]}
            />
        </Form.Item>
        <Form.Item>
            <Button
                type="primary"
                htmlType="submit"
            >
                Invite
            </Button>
        </Form.Item>
    </Form>
}