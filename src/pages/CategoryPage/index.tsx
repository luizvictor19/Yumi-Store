import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import CarouselBanner from "../../components/Carousel";
import api from "../../services";

import { IProducts } from "../../types";
import { Container } from "./styles";

const CategoryPage = () => {
  const [products, setProducts] = useState([] as IProducts[]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const getProducts = async () => {
      await api
        .get(`/products?category=${id}`)
        .then((response) => setProducts(response.data));
    };
    getProducts();
  }, [id]);

  return (
    <>
      <CarouselBanner />
      <Container>
        {id === "1" ? <h1>Beleza e Higiene</h1> : <h1>Comida</h1>}

        <ul>
          {products.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default CategoryPage;
