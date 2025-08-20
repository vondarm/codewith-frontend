export interface WorkspaceMember {
    id: number
    userId: string
    displayName: string
    role: "owner" | "editor" | "viewer"
}
