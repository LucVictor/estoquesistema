import * as React from "react";
import TableShelfLife from "./table";

const products = [
  {
    code: 101,
    name: "Leite Integral",
    date_shelflife: new Date("2025-08-01"),
    created_at: new Date("2025-04-01T10:30:00Z"),
    updated_at: new Date("2025-04-15T14:00:00Z"),
    created_by: "joao.silva",
    quantity: 100,
  },
  {
    code: 102,
    name: "Iogurte Natural",
    date_shelflife: new Date("2025-06-15"),
    created_at: new Date("2025-04-05T09:45:00Z"),
    updated_at: new Date("2025-04-20T11:20:00Z"),
    created_by: "maria.oliveira",
    quantity: 100,
  },
  {
    code: 103,
    name: "Queijo Minas",
    date_shelflife: new Date("2025-07-10"),
    created_at: new Date("2025-04-10T08:00:00Z"),
    updated_at: new Date("2025-04-25T16:10:00Z"),
    created_by: "carlos.souza",
    quantity: 100,
  },
];

function ShelfLifeIndex() {
  return (
    <div>
      <TableShelfLife listProductsDateShelflife={products} />
    </div>
  );
}

export default ShelfLifeIndex;
