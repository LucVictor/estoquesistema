import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@mui/material";
import { Menuitem } from "../../props/menuItem";

interface MenuNavButtonProps {
  nameMenu: string;
  itens: Menuitem[];
}

const MenuNavButton: React.FC<MenuNavButtonProps> = ({ nameMenu, itens }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [menuWidth, setMenuWidth] = React.useState<number | undefined>(
    undefined,
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setMenuWidth(event.currentTarget.offsetWidth);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="outlined"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        size={"large"}
        style={{ width: "150px" }}
      >
        {nameMenu}
      </Button>
      <Menu
        slotProps={{
          paper: { sx: { width: menuWidth } },
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {itens.map((item) => (
          <MenuItem
            divider={true}
            key={item.name}
            onClick={handleClose}
            href={item.href}
          >
            <Link
              href={item.href}
              sx={{ margin: "auto auto" }}
              underline="none"
            >
              {item.name}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MenuNavButton;
