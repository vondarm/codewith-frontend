"use client"

import {Button, Card, Form, Input} from "antd";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {login} from "@/api/auth/login";
import {ROUTES} from "@/app/routes";

type FieldType = {
    email: string;
    password: string;
};

export default function Login() {
    const {push} = useRouter()
    const [form] = Form.useForm()

    const onFinish = async (values: FieldType) => {
        const res = await login(values.email, values.password)
        if (res.type === "success") {
            push(ROUTES.WORKSPACE)
        } else {
            form.setFields([{name: "password", errors: [res.data.detail]}])
        }
    }

    return <Card
        title="Login to your account"
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
                label="Email"
                name="email"
                rules={[
                    {required: true, message: 'Please input your email!'},
                    {type: "email", message: 'Please enter correct email!'},
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password/>
            </Form.Item>
            <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>
            <Form.ErrorList/>
        </Form>
        <Link href={ROUTES.REGISTER}>Register new account</Link>
    </Card>
}
