import {FC} from "react";
import {Button, Form, Input, Select} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useForm} from "antd/lib/form/Form";
import {useRevalidateRooms} from "@/entities/rooms";
import {RoomApi} from "@/api/room";

interface Props {
    workspaceId: number
}

type FieldType = {
    name: string;
    environmentId: string;
};

export const CreateRoomForm: FC<Props> = ({workspaceId}) => {

    const revalidateRooms = useRevalidateRooms(workspaceId)
    const [form] = useForm()

    const onFinish = async ({name, environmentId}: FieldType) => {
        const res = await RoomApi.create(workspaceId, name, environmentId)
        if (res.type === "success") {
            await revalidateRooms()
        } else {
            form.setFields([
                {
                    name: "name",
                    errors: [...(res.data.name || []), ...(res.data.workspaceId || []), ...(res.data.nonFieldErrors || [])]
                },
                {name: "environmentId", errors: res.data.environmentId},
            ])
        }
    };

    return <Form
        form={form}
        name="createRoom"
        layout="inline"
        onFinish={onFinish}
        initialValues={{environmentId: "js"}}
    >
        <Form.Item<FieldType>
            name="name"
            rules={[{required: true, message: 'Please input room name!'}]}
        >
            <Input prefix={<UserOutlined/>} placeholder="Name"/>
        </Form.Item>
        <Form.Item<FieldType> name="environmentId">
            <Select
                style={{width: 120}}
                options={[
                    {value: 'js', label: 'JavaScript'},
                    {value: 'ts', label: 'TypeScript'},
                ]}
            />
        </Form.Item>
        <Form.Item>
            <Button
                type="primary"
                htmlType="submit"
            >
                Create
            </Button>
        </Form.Item>
    </Form>
}
