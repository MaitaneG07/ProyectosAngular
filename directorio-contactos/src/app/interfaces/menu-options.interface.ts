export interface MenuOption {
    id: number;
    label: string;
    subLabel: string;
    route: string;
    accion?: string; // Campo opcional para acciones
}
