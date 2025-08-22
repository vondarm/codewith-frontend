"use client"

import {PropsWithChildren} from "react";
import {Content, Footer, Header} from "antd/lib/layout/layout";
import {Flex, Space, Tag, theme} from "antd";
import {User} from "@/components/account/user";
import dynamic from "next/dynamic";
import {Workspace} from "@/components/account/workspace";

const AuthRequired = dynamic(() => import("@/components/routerBoundaries/AuthRequired"), {ssr: false});

export default function AuthenticatedLayout({children}: PropsWithChildren) {
    const {token: {colorBgContainer, borderRadiusLG}} = theme.useToken();

    return <AuthRequired>
        <Header style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Tag color="success">CodeWith</Tag>
            <Space>
                <Workspace/>
                <User/>
            </Space>
        </Header>
        <Content style={{padding: '48px', display: 'flex', flexDirection: "column"}}>
            <Flex
                style={{
                    background: colorBgContainer,
                    flexGrow: 1,
                    padding: 24,
                    borderRadius: borderRadiusLG,
                }}
            >
                {children}
            </Flex>
        </Content>
        <Footer style={{textAlign: 'center'}}>
            CodeWith ©{new Date().getFullYear()} Created by Vondarm
        </Footer>
    </AuthRequired>
}
