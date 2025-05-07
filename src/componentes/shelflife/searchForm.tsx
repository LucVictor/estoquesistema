import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import RegisterForm from "./registerForm";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Search } from "@mui/icons-material";
import { ProductProps } from "../../props/productProps";

interface SearchProductShelfProps {
  products_list: ProductProps[];
}

const styleModel = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SearchProdutcShelf: React.FC<SearchProductShelfProps> = ({
  products_list,
}) => {
  const [value, setValue] = React.useState("");
  const [product, setproduct] = React.useState<ProductProps | null>(null);
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setValue("");
  };

  const handleSearch = () => {
    const found_product = products_list.find((e) => e.code === parseInt(value));
    if (!found_product) {
      setError(true);
    } else {
      setError(false);
      setproduct(found_product);
      handleOpen();
    }
  };

  return (
    <>
      <FormGroup sx={{ gap: "10px", margin: "auto auto", width: "500px" }}>
        <Typography>Procurar produto:</Typography>
        <TextField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id="outlined-number"
          type="number"
          label="Código"
        />
        <Button onClick={handleSearch} variant="contained" endIcon={<Search />}>
          Procurar
        </Button>
      </FormGroup>

      <div style={{ margin: "10px auto", width: "500px" }}>
        {product ? (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={styleModel}>
              <RegisterForm product={product} />
            </Box>
          </Modal>
        ) : (
          <></>
        )}
        {error ? (
          <Box>
            <Typography textAlign={"center"}>
              Nenhum produto encontrado
            </Typography>
          </Box>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default SearchProdutcShelf;
