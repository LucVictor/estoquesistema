import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ProductProps } from "../../props/productProps";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
interface RegisterFormProps {
  product: ProductProps;
}

const RegisterFormDamaged: React.FC<RegisterFormProps> = ({ product }) => {
  return (
    <div>
      <FormGroup sx={{ gap: "10px" }}>
        <TextField value={product.code} label="Codigo" />
        <TextField value={product.name} label="Nome" />
        <TextField type="number" label="Quantidade" />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Data de Avaria" />
        </LocalizationProvider>
        <Button variant="contained" endIcon={<AppRegistrationIcon />}>
          Cadastrar
        </Button>
      </FormGroup>
    </div>
  );
};

export default RegisterFormDamaged;
