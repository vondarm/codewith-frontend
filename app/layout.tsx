"use client"

import {AntdRegistry} from '@ant-design/nextjs-registry';
import {EntitiesProvider} from "@/entities/entitiesProvider";

import '@ant-design/v5-patch-for-react-19';
import "@/public/global.css"
import {Layout} from 'antd';
import {SuspenseView} from "@/components/SuspenseView";

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <SuspenseView>
            <AntdRegistry>
                <EntitiesProvider>
                    <Layout style={{height: '100dvh'}}>
                        {children}
                    </Layout>
                </EntitiesProvider>
            </AntdRegistry>
        </SuspenseView>
        </body>
        </html>
    );
}
