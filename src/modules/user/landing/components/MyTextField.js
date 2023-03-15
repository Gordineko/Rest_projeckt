import { TextField } from "@mui/material";

export default function MyTextField() {
  return (
    <TextField
      label="My TextField"
      variant="outlined"
      InputProps={{ disableUnderline: true }}
      
    />
  );
}
