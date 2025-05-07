import { Box } from "@mui/material";
import { useState } from "react";
import { ProductDamaged } from "../../props/productDamaged";
import { Chart } from "react-google-charts";
import { Typography } from "@mui/material";
interface CompareReportDamagedProps {
  dateFirstReport1: Date;
  dateLastReport1: Date;
  dateFirstReport2: Date;
  dateLastReport2: Date;
}

function CompareReportDamaged({
  dateFirstReport1,
  dateLastReport1,
  dateFirstReport2,
  dateLastReport2,
}: CompareReportDamagedProps) {
  const [productsReport1, setProductsReport1] = useState<ProductDamaged[]>([]);
  const [productsReport2, setProductsReport2] = useState<ProductDamaged[]>([]);

  const listagem1: ProductDamaged[] = [
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

  const listagem2: ProductDamaged[] = [
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
      price: 2755,
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
  const sumPrices = (items: ProductDamaged[]): number => {
    return items.reduce(
      (accumulator, current) => accumulator + current.price,
      0,
    );
  };
  const totalPriceReport1 = sumPrices(listagem1);
  const totalPriceReport2 = sumPrices(listagem2);

  const data = [
    ["Relatório", "Custo", { role: "annotation" }, { role: "style" }],
    ["Relatório 1", totalPriceReport1, totalPriceReport1, "red"], // RGB value
    ["Relatório 2", totalPriceReport2, totalPriceReport2, "red"], // English color name
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        gap: "5rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "5rem",
        }}
      >
        <Box>
          <Typography fontSize={20} color="white">
            Relatório 1: <br />
            De {dateFirstReport1.toLocaleDateString()} á {""}
            {dateLastReport1.toLocaleDateString()} <br />
            Total de custo: R$
            {totalPriceReport1.toFixed(2)} <br />
            Número de avarias: {listagem1.length} <br />
            Média de custa por avarias:{" "}
            {(totalPriceReport1 / listagem1.length).toFixed(2)}
          </Typography>
        </Box>
        <Box>
          <Typography fontSize={20} color="white">
            Relatório 2: <br />
            De {dateFirstReport2.toLocaleDateString()} á {""}
            {dateLastReport2.toLocaleDateString()} <br />
            Total de custo: R$
            {totalPriceReport2.toFixed(2)}
            <br />
            Número de avarias: {listagem2.length} <br />
            Média de custa por avarias:{" "}
            {(totalPriceReport2 / listagem2.length).toFixed(2)}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ gap: "1rem" }}>
        <Typography variant="h6" color="white">
          Comparação:
          {Math.round(
            ((totalPriceReport1 - totalPriceReport2) / totalPriceReport2) * 100,
          ) < 0 ? (
            <Typography variant="h6" color="green">
              Redução de{" "}
              {Math.round(
                ((totalPriceReport1 - totalPriceReport2) / totalPriceReport2) *
                  100,
              )}
              %
              <br />
              Redução de -R${-(totalPriceReport1 - totalPriceReport2)}
            </Typography>
          ) : (
            <Typography variant="h6" color="red">
              Aumento de
              {Math.round(
                ((totalPriceReport1 - totalPriceReport2) / totalPriceReport2) *
                  100,
              )}
              %
              <br />
              Aumento de +R${-(totalPriceReport1 - totalPriceReport2)}
            </Typography>
          )}
        </Typography>
        <Chart
          chartType="ColumnChart"
          options={{
            hAxis: {
              textStyle: {
                fontName: "Arial",
                fontSize: 12,
                color: "white",
              },
            },
            backgroundColor: "transparent",
            vAxis: {
              textStyle: {
                fontName: "Arial",
                fontSize: 12,
                color: "white",
              },
              minValue: 0,
            },
            colors: ["red"],
            legend: {
              position: "bottom",
              textStyle: {
                color: "white",
              },
            },
            bar: {
              groupWidth: "75%",
            },
          }}
          width="20rem"
          height="20rem"
          data={data}
        />
      </Box>
    </Box>
  );
}

export default CompareReportDamaged;
