import { Alert, Snackbar } from '@mui/material'
import React, { useState } from 'react'

const SnackBarAlert = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal:"right" }}
      open={open}
      onClose={handleClose}
      autoHideDuration= {5000}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Solicitud pedida exitosamente
      </Alert>
    </Snackbar>
  )
}

export default SnackBarAlert;