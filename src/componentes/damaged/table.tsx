import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { ProductDamaged } from "../../props/productDamaged";

export interface TableDamagedProps {
  listProductsDamaged: ProductDamaged[];
}

const TableDamagedProducts: React.FC<TableDamagedProps> = ({
  listProductsDamaged,
}) => {
  const [listProducts] = useState(listProductsDamaged);
  const [filtedListProducts, setFiltedListProducts] = useState<
    ProductDamaged[]
  >([]);

  const [inputFilter, setInputFilter] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputFilter(event.target.value);
  };

  useEffect(() => {
    setFiltedListProducts(
      listProducts.filter((product) =>
        product.name.toLowerCase().includes(inputFilter.toLowerCase()),
      ),
    );
  }, [inputFilter, listProducts]);

  return (
    <div style={{ width: "50rem" }}>
      <TextField
        value={inputFilter}
        onChange={handleInputChange}
        id="outlined-basic"
        label="Nome:"
        variant="outlined"
        size="small"
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Data</TableCell>
              <TableCell align="center">Código</TableCell>
              <TableCell align="center">Produto</TableCell>
              <TableCell align="center">Quantidade</TableCell>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="center">Criador</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtedListProducts.map((row) => (
              <TableRow
                key={row.code}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" align="center" scope="row">
                  {row.created_at.toLocaleDateString()}
                </TableCell>
                <TableCell component="th" align="center" scope="row">
                  {row.code}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.quantity}</TableCell>
                <TableCell align="center">{row.price.toFixed(2)}</TableCell>
                <TableCell align="center">{row.created_by}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableDamagedProducts;
