export interface Room {
    id: number
    publicId: string
    name?: string
    environmentId: string
    description?: string
    privateDescription?: string
    code?: string
}

export interface PublicRoom {
    id: number
    publicId: string
    name?: string
    environmentId: string
    description?: string
    code?: string
}
