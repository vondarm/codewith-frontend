"use client"

import {FC, PropsWithChildren, Suspense, useEffect} from "react";
import {ErrorBoundary} from "react-error-boundary";
import {Result, Spin} from "antd";
import {useRouter} from "next/navigation";
import {ROUTES} from "@/app/routes";

const FallbackComponent = ({error}: { error: any }) => {
    const {push} = useRouter()

    useEffect(() => {
        console.log("ERRORR")
        if (error?.response?.status === 401) {
            push(ROUTES.LOGIN)
        }
    }, [error, push]);

    return <Result
        title="Ошибка"
        subTitle="Простите нас пожалуйсто, что то сломалось"
    />
}

export const SuspenseView: FC<PropsWithChildren> = ({children}) => {
    return <Suspense fallback={<Spin/>}>
        <ErrorBoundary FallbackComponent={FallbackComponent}>
            {children}
        </ErrorBoundary>
    </Suspense>
}
