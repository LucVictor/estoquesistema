import { AppBar, Box, Toolbar } from "@mui/material";
import * as React from "react";
import MenuNavButton from "./menubutton";
import "./navbar.scss";

const vencimentos_itens = [
  { name: "Visualizar", href: "/vencimentos" },
  { name: "Cadastrar", href: "/pagamentos" },
  { name: "Relatorio", href: "/relatorios" },
];

const avarias_itens = [
  { name: "Visualizar", href: "/vencimentos" },
  { name: "Cadastrar", href: "/pagamentos" },
  { name: "Relatorio", href: "/relatorios" },
];

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "Flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src="https://example.com/logo.png" alt="Logo" />
          <Box sx={{ display: "Flex", gap: "1rem" }}>
            <MenuNavButton nameMenu="Vencimentos" itens={vencimentos_itens} />
            <MenuNavButton nameMenu="Avarias" itens={avarias_itens} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
