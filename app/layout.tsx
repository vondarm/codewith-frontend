"use client"

import {AntdRegistry} from '@ant-design/nextjs-registry';
import {EntitiesProvider} from "@/entities/entitiesProvider";

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <AntdRegistry>
            <EntitiesProvider>
                {children}
            </EntitiesProvider>
        </AntdRegistry>
        </body>
        </html>
    );
}
