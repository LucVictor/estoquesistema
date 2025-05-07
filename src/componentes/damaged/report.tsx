import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { ProductDamaged } from "../../props/productDamaged";
import TableDamagedProductsReport from "./tablereport";
import SumPrice from "./reportprice";

interface ReportDamagedProps {
  dateFirst: Date;
  dateLast: Date;
}

function ReportDamaged({ dateFirst, dateLast }: ReportDamagedProps) {
  const [products, setProducts] = useState<ProductDamaged[]>([]);

  const listagem: ProductDamaged[] = [
    {
      code: 101,
      name: "Glass Bottle",
      quantity: 5,
      price: 399,
      created_at: new Date("2025-04-20T10:30:00"),
      created_by: "Alice Johnson",
    },
    {
      code: 102,
      name: "LED Monitor",
      quantity: 2,
      price: 1205,
      created_at: new Date("2025-04-21T14:15:00"),
      created_by: "Bob Smith",
    },
    {
      code: 103,
      name: "Ceramic Plate",
      quantity: 10,
      price: 275,
      created_at: new Date("2025-04-22T09:45:00"),
      created_by: "Charlie Nguyen",
    },
    {
      code: 104,
      name: "Wooden Chair",
      quantity: 1,
      price: 450,
      created_at: new Date("2025-04-23T16:00:00"),
      created_by: "Dana Lee",
    },
    {
      code: 105,
      name: "Smartphone Screen",
      quantity: 4,
      price: 8999,
      created_at: new Date("2025-04-24T11:20:00"),
      created_by: "Eli Torres",
    },
  ];

  useEffect(() => {
    const nova_listagem = listagem.filter(
      (product) =>
        product.created_at >= dateFirst && product.created_at <= dateLast,
    );
    setProducts(nova_listagem);
  }, []);

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <SumPrice listProductsDamagedReport={products} />
      </Box>
      <Box>
        <TableDamagedProductsReport listProductsDamagedReport={products} />
      </Box>
    </div>
  );
}

export default ReportDamaged;
