import {Button, Popconfirm, Space, Table} from "antd";
import {FC, useCallback, useMemo} from "react";
import {Room} from "@/domain/room";
import {useRevalidateRooms} from "@/entities/rooms";
import {RoomApi} from "@/api/room";
import {CreateRoomForm} from "@/components/rooms/createRoomForm";

interface DataType {
    key: number;
    name: string;
    environmentId: string
}

const createColumns = (
    removeRoom: (id: number) => void,
    joinRoom: (id: number) => void,
): TableProps<DataType>['columns'] => [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Language',
        dataIndex: 'environmentId',
        key: 'environmentId',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => <Space size="middle">
            <Popconfirm
                title={`Remove room ${record.name}?`}
                description="Are you sure to delete this room?"
                onConfirm={() => removeRoom(record.id)}
                onCancel={() => void 0}
                okText="Yes"
                cancelText="Cancel"
            >
                <Button danger>Remove</Button>
            </Popconfirm>
            <Button>Join</Button>
        </Space>
    },
];

interface Props {
    rooms: Room[];
    workspaceId: number
}

export const RoomsTable: FC<Props> = ({rooms, workspaceId}) => {

    const revalidateRooms = useRevalidateRooms(workspaceId)

    const removeRoom = useCallback(
        async (id: number) => {
            await RoomApi.remove(id)
            await revalidateRooms(workspaceId)
        },
        [revalidateRooms, workspaceId]
    )
    const columns = useMemo(() => createColumns(removeRoom, () => void 0), [removeRoom])

    return <Space direction="vertical" style={{flex: 1}}>
        <Table<DataType> columns={columns} dataSource={rooms.map(room => ({...room, key: room.id}))}/>
        <CreateRoomForm workspaceId={workspaceId}/>
    </Space>
}
