import {FC, PropsWithChildren, Suspense} from "react";
import {ErrorBoundary} from "react-error-boundary";
import {Result, Spin} from "antd";

export const SuspenseView: FC<PropsWithChildren> = ({children}) => {
    return <Suspense fallback={<Spin size="large"/>}>
        <ErrorBoundary fallback={<Result
            title="Ошибка"
            subTitle="Простите нас пожалуйсто, что то сломалось"
        />}>
            {children}
        </ErrorBoundary>
    </Suspense>
}
