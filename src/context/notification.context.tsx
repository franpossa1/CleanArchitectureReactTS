import React from "react";
import { Notification } from "../Components/Notifications/index";
import { AlertColor } from "@mui/material";

// Definición del tipo de propiedades del contexto
type ContextProps = {
    getError: (msg: string) => void; // Función para obtener un error
}

// Creación del contexto de notificación
const NotificationContext = React.createContext<ContextProps | null>(null);

// Componente proveedor de notificación
export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
    // Estado para el mensaje de notificación
    const [msg, setMsg] = React.useState("");
    // Estado para controlar la apertura de la notificación
    const [open, setOpen] = React.useState(false);
    // Estado para definir la gravedad de la notificación
    const [severity, setSeverity] = React.useState<AlertColor | undefined>(undefined);

    // Función para cerrar la notificación
    const handleClose = () => {
        setOpen(false);
    }

    // Función para obtener un error
    const getError = (msg: string) => {
        setSeverity("error"); // Establece la gravedad de la notificación como "error"
        setOpen(true); // Abre la notificación
        setMsg(msg); // Establece el mensaje de la notificación
    }

    // Objeto de valor para el contexto
    const value = { getError };

    return (
        <NotificationContext.Provider value={value}>
            {/* Componente de notificación */}
            <Notification handleClose={handleClose} open={open} severity={severity} msg={msg} />
            {/* Renderiza los componentes hijos */}
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    const context = React.useContext(NotificationContext)
    if (!context) throw new Error("No existe Context")


    return context
}