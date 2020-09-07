// Companies Data
export interface Companies {
    id?: bigint;
    nombre: string;
    descripcion: string;
    categoria?: undefined;
    slack_bot_token?: string;
    slack_channel_id?: string;
    sprints?: undefined;
}
