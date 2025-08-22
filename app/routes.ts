export const ROUTES = {
    HOME: '/',
    WORKSPACE: '/workspace',
    CREATE_WORKSPACE: '/create_workspace',
    ROOM: '/room',
    LOGIN: '/login',
    REGISTER: '/register',
    getWorkspaceSettingsRoute: (id: number) => `/workspace/${id}/settings/workspace`,
}
