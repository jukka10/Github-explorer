import styled, { css } from "styled-components";

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  color: #3a3a3a;
  font-size: 48px;
  max-width: 500px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;

    ${(props) =>
      props.hasError &&
      css`
        border: 2px solid red;
      `};

    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border: 0;
    color: #fff;
    border-radius: 0 5px 5px 0;
    font-weight: bold;
    transition: 0.2s background-color;

    &:hover {
      background: #03a14a;
    }
  }
`;
export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a + a {
    margin-top: 16px;
  }

  a {
    background: #fff;
    text-decoration: none;
    padding: 24px;
    width: 100%;
    border-radius: 5px;
    display: block;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        margin-top: 4px;
        font-size: 18px;
        color: #a8a8b3;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.p`
  font-size: 18px;
  color: red;
  margin: 10px;
`;
