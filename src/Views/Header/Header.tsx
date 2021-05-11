import "./Header.scss";
import Logo from "Assets/Logo.svg";
import BasketIcon from "Assets/Basket.svg";
import {Container, PriceText} from "Components";
import {Box} from "@material-ui/core";
import useTotalPrice from "Hooks/useTotalPrice";

const Header = () => {
  const totalPrice = useTotalPrice();

  return (
    <div id="header">
      <Container>
        <Box display="flex" justifyContent="space-between" width="100%">
          <div className="header__first"></div>
          <img src={Logo} alt="market logo" className={"header__logo"} />
          <div className="header__cart">
            <img src={BasketIcon} alt="Cart" />
            <PriceText price={totalPrice} color="white" />
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Header;
