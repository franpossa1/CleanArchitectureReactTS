import { Alert, AlertColor, Snackbar, Typography } from "@mui/material"

type NotificationProps ={
    open:boolean, 
    msg:string,
    severity: AlertColor | undefined,
    handleClose : () => void

}
export const Notification:React.FC<NotificationProps> = ({
    handleClose,
    open,
    msg,
    severity
}) => {
    return(
        <Snackbar
            anchorOrigin={{vertical:"top",horizontal:"center"}}
            autoHideDuration={4000}
            open ={open}
            onClose={handleClose}

            >
            <Alert onClose={handleClose} severity={severity}>
            <Typography>{msg}</Typography>
            </Alert>
        </Snackbar>
    )
}