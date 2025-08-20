export interface Room {
    id: number
    roomId: string
    name?: string
    environmentId: string
    description?: string
    privateDescription?: string
    code?: string
}

export interface PublicRoom {
    id: number
    roomId: string
    name?: string
    environmentId: string
    description?: string
    code?: string
}
