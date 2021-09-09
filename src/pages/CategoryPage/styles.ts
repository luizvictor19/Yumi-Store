import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-size: 3rem;
    text-align: center;
    margin-top: 20px;
    color: var(--purple);
    text-shadow: 3px 3px 3px rgb(144 144 144);
    font-variant: small-caps;
    letter-spacing: 2px;
  }

  @media (min-width: 600px) {
    h1 {
      font-size: 4rem;
      letter-spacing: 3px;
    }
  }
`;

export const BrandImages = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .brands {
    text-align: center;
  }

  img {
    width: 45%;
    max-width: 200px;
  }

  p {
    font-size: 1rem;
    margin: 0 20px;
    text-align: center;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-evenly;

    .brands {
      display: flex;
      flex-direction: column;
      width: 400px;
      align-items: center;
    }

    p {
      font-size: 1.6rem;
    }
  }
`;
