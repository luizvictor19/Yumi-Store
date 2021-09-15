import { Link, useHistory } from "react-router-dom";
import imageLogo from "../../assets/dogImage.png";
import { VscSearch, VscHeart } from "react-icons/vsc";
import { BsPersonFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import ProfileMenu from "../ProfileButtonMenu";
import {
  StyledMenuBar,
  ContainerLogo,
  StyledRightNav,
  StyledBurger,
  Search,
  BottomMenu,
} from "./style";
import { Menu, Dropdown, Button } from "antd";
import { Badge } from "antd";
import { useCartContext } from "../../providers/CartProvider";
import { useProducts } from "../../providers/Products";
import { useState } from "react";

export const MenuSearch = () => {
  const { products } = useProducts();
  const [open, setOpen] = useState<boolean>(false);
  const [filtrado, setFiltrado] = useState("");
  const { cartProducts } = useCartContext();

  const [profileButtonClicked, setProfileButtonClicked] =
    useState<boolean>(false);

  const history = useHistory();
  const changePage = (route: string) => {
    history.push(`/${route}`);
  };

  const filteredProducts = products.filter(({ name }) =>
    name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(
        filtrado
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
      )
  );

  const Pesquisar = () => {
    if (filtrado !== "" && filteredProducts.length !== 0) {
      history.push(`filtered:${filtrado}`, filtrado);
    } else if (filteredProducts.length === 0) {
      history.push(`not-found`, filtrado);
    }
  };

  const menuSaude = (
    <Menu>
      <Menu.Item>
        <Link rel="noopener noreferrer" to="/products/category/1">
          Beleza e Higiene
        </Link>
      </Menu.Item>
    </Menu>
  );

  const menuAdote = (
    <Menu>
      <Menu.Item>
        <Link rel="noopener noreferrer" to={{}}>
          Acolha
        </Link>
      </Menu.Item>
    </Menu>
  );

  const menuOutlet = (
    <Menu>
      <Menu.Item>
        <Link rel="noopener noreferrer" to="/products/category/5">
          Roupas
        </Link>
      </Menu.Item>
    </Menu>
  );

  const menuCaninos = (
    <Menu>
      <Menu.Item>
        <Link rel="noopener noreferrer" to="/products/species/cachorro">
          Caninos
        </Link>
      </Menu.Item>
    </Menu>
  );

  const menuFelinos = (
    <Menu>
      <Menu.Item>
        <Link rel="noopener noreferrer" to="/products/species/gato">
          Felinos
        </Link>
      </Menu.Item>
    </Menu>
  );

  const menuOutros = (
    <Menu>
      <Menu.Item>
        <Link rel="noopener noreferrer" to="/products/category/3">
          Acessórios
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link rel="noopener noreferrer" to="/products/category/4">
          Brinquedos
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link rel="noopener noreferrer" to="/products/category/2">
          Rações
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <StyledMenuBar>
        <ContainerLogo>
          <div className="logo-button" onClick={() => changePage("")}>
            <img
              style={{ height: "55px", width: "55px" }}
              className="logo"
              src={imageLogo}
              alt="logo"
            />
            <h1 className="titleMenu">Yumi</h1>
            <h1 className="titleMenu-2">Store</h1>
          </div>
        </ContainerLogo>
        <Search>
          <input
            value={filtrado}
            onChange={(event) => setFiltrado(event.target.value)}
            placeholder="Exemplo: Casa Iglu Furacão Pet Preta para Cães"
          ></input>
          <div onClick={() => Pesquisar()}>
            <VscSearch style={{ height: "25px", width: "25px" }} />
          </div>
        </Search>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div></div>
          <div></div>
          <div></div>
        </StyledBurger>
        {profileButtonClicked && (
          <ProfileMenu
            profileButtonClicked={profileButtonClicked}
            setProfileButtonClicked={setProfileButtonClicked}
          />
        )}
        <StyledRightNav open={open}>
          <div className="right-nav">
            {open && (
              <li key="1" onClick={() => setOpen(false)}>
                <Link to={{}}>
                  <VscSearch style={{ height: "30px", width: "30px" }} />
                </Link>
              </li>
            )}
            <li
              key="2"
              onMouseLeave={() => setProfileButtonClicked(false)}
              onMouseEnter={() => setProfileButtonClicked(true)}
            >
              <BsPersonFill style={{ height: "30px", width: "30px" }} />
            </li>
            <li key="3" onClick={() => changePage("favorite")}>
              <VscHeart style={{ height: "30px", width: "30px" }} />
            </li>
            <li key="4" onClick={() => changePage("cart")}>
              <Badge count={cartProducts.length}>
                <HiShoppingCart style={{ height: "30px", width: "30px" }} />
              </Badge>
            </li>
          </div>
        </StyledRightNav>
      </StyledMenuBar>

      <BottomMenu open={open}>
        <div style={{ width: "100%" }}>
          <Dropdown
            className="item"
            overlay={menuCaninos}
            placement="bottomCenter"
            arrow
            key="1"
          >
            <Button>Cachorros</Button>
          </Dropdown>
          <Dropdown
            className="item"
            overlay={menuFelinos}
            placement="bottomCenter"
            arrow
          >
            <Button>Gatos</Button>
          </Dropdown>
          <Dropdown
            className="item"
            overlay={menuSaude}
            placement="bottomCenter"
            arrow
            key="3"
          >
            <Button>Saúde</Button>
          </Dropdown>
          <Dropdown
            className="item"
            overlay={menuOutlet}
            placement="bottomCenter"
            arrow
            key="4"
          >
            <Button>Outlet</Button>
          </Dropdown>
          <Dropdown
            className="item"
            overlay={menuOutros}
            placement="bottomCenter"
            arrow
            key="2"
          >
            <Button>Outros</Button>
          </Dropdown>
          <Dropdown
            className="item"
            overlay={menuAdote}
            placement="bottomCenter"
            arrow
            key="5"
          >
            <Button>Adote</Button>
          </Dropdown>
        </div>
      </BottomMenu>
    </div>
  );
};
