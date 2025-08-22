"use client"

import {Button, Card, Form, Input} from "antd";
import {useRouter} from "next/navigation";
import {ROUTES} from "@/app/routes";
import {WorkspaceApi} from "@/api/workspace";
import {useRevalidateWorkspaces} from "@/entities/workspaces";

type FieldType = {
    name: string,
};

export default function CreateWorkspace() {
    const {push} = useRouter()
    const revalidateWorkspaces = useRevalidateWorkspaces()
    const [form] = Form.useForm()

    const onFinish = async (values: FieldType) => {
        const created = await WorkspaceApi.create(values.name)
        push(ROUTES.getWorkspaceSettingsRoute(created.id))
        await revalidateWorkspaces()
    }

    return <Card
        title="Create new workspace"
        variant="outlined"
        style={{width: 300, margin: "auto", marginTop: 200}}
    >
        <Form
            form={form}
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Name"
                name="name"
                rules={[
                    {required: true, message: 'Please input workspace name!'},
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Create
                </Button>
            </Form.Item>
            <Form.ErrorList/>
        </Form>
    </Card>
}
