import {SuspenseView} from "@/components/SuspenseView";
import WorkspaceRequired from "@/components/routerBoundaries/WorkspaceRequired";

export default function WorkspaceLayout({children}: PropsWithChildren) {
    return <SuspenseView>
        <WorkspaceRequired>
            {children}
        </WorkspaceRequired>
    </SuspenseView>
}
