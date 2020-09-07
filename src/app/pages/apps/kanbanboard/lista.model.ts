// Kanban Board Data
export interface Lista {
    title: number;
    tareas: undefined;
    nombre: string;
    col_pila_sin_priorizar: boolean;
    col_finalizado: boolean;
    color: string;
    fijar_en_kanban: boolean;
    sprint: number;
    estatus: number;
    estatus_clave: string;
}
