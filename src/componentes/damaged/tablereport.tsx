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
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

export interface TableDamagedProductsReportProps {
  listProductsDamagedReport: ProductDamaged[];
}

const TableDamagedProductsReport: React.FC<TableDamagedProductsReportProps> = ({
  listProductsDamagedReport,
}) => {
  const [filtedListProducts, setFiltedListProducts] = useState<
    ProductDamaged[]
  >([]);

  const [inputFilter, setInputFilter] = useState<string>("");
  const [inputCodeFilter, setCodeFilter] = useState<number | undefined>(
    undefined,
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCodeFilter(undefined);
    setInputFilter(event.target.value);
  };

  const handleInputCodeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputFilter("");
    const value = event.target.value;
    setCodeFilter(value === "" ? undefined : Number(value));
  };

  useEffect(() => {
    const filtered = listProductsDamagedReport.filter((product) => {
      const matchName = inputFilter
        ? product.name.toLowerCase().includes(inputFilter.toLowerCase())
        : true;
      const matchCode = inputCodeFilter
        ? product.code === inputCodeFilter
        : true;

      return matchName && matchCode;
    });
    setFiltedListProducts(filtered);
  }, [inputFilter, inputCodeFilter, listProductsDamagedReport]);

  return (
    <div style={{ width: "50rem" }}>
      <Box>
        <Typography>Filtrar :</Typography>
        <TextField
          sx={{ margin: "0.5rem 0.5rem 0.5rem 0" }}
          value={inputFilter}
          onChange={handleInputChange}
          id="filter-name"
          label="Nome:"
          variant="outlined"
          size="small"
        />
        <TextField
          sx={{ margin: "0.5rem 0.5rem 0.5rem 0" }}
          value={inputCodeFilter ?? ""}
          onChange={handleInputCodeChange}
          id="filter-code"
          label="Código:"
          inputProps={{ type: "number" }}
          variant="outlined"
          size="small"
        />
      </Box>
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

export default TableDamagedProductsReport;
