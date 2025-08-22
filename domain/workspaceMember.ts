export interface WorkspaceMember {
    id: number
    email: string
    displayName: string
    role: "owner" | "editor" | "viewer"
}
