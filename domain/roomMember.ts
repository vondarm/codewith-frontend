export interface RoomMember {
    id: number
    userId?: string
    displayName: string
    role: "owner" | "editor" | "viewer"
}
