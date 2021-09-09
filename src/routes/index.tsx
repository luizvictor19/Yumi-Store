import { Route, Switch } from "react-router-dom";

//Páginas
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { Products } from "../pages/Products/Index";
import SpeciesPage from "../pages/SpeciesPage";
import CategoryPage from "../pages/CategoryPage";
import BrandPage from "../pages/BrandPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/register">
        <RegisterPage />
      </Route>

      <Route path="/login">
        <LoginPage />
      </Route>

      <Route exact path="/products">
        <Products />
      </Route>

      <Route path="/products/species/:id">
        <SpeciesPage />
      </Route>

      <Route path="/products/category/:id">
        <CategoryPage />
      </Route>

      <Route path="/products/brand/:id">
        <BrandPage />
      </Route>
    </Switch>
  );
};

export default Routes;
