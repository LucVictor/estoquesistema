import { Box, Typography } from "@mui/material";
import { ProductDamaged } from "../../props/productDamaged";
import { TableDamagedProductsReportProps } from "./tablereport";

const SumPrice: React.FC<TableDamagedProductsReportProps> = ({
  listProductsDamagedReport,
}) => {
  const sumPrices = (items: ProductDamaged[]): number => {
    return items.reduce(
      (accumulator, current) => accumulator + current.price,
      0,
    );
  };
  const total = sumPrices(listProductsDamagedReport);
  return (
    <Box>
      <Typography>Custo total de: R${total.toFixed(2)}</Typography>
    </Box>
  );
};
export default SumPrice;
