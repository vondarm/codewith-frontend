import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {FC, PropsWithChildren} from "react";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: (failureCount, error: any) => {
                if (error?.status === 401) return false;
                return failureCount < 3;
            },
        },
        useErrorBoundary: true,
    }
})

export const EntitiesProvider: FC<PropsWithChildren> = ({children}) => {
    return <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
}
