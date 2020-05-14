import styled, { css } from 'styled-components';

interface FormProps {
  hasError: boolean;
}

export const Form = styled.form<FormProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 50px;
  margin: 6vh auto 2vh;

  button {
    background-color: #8e8e8e;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 15px;
    border-radius: 5px 0 0 5px;
    border: 0;
  }

  input + button {
    border-radius: 0 5px 5px 0;
    background-color: #017af9;
  }

  input {
    padding: 1vh 2vw;
    height: 50px;
    flex: 1;
    border: 2px solid #8e8e8e;
    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}
    &::placeholder {
      color: #a8a8b3;
    }
  }
`;
export const Error = styled.span`
  display: block;
  color: #c53030;
  width: 90%;
  margin: 1vh auto 2vh;
`;
export const Subtitle = styled.h2`
  text-align: center;
  font-size: 1rem;
  color: #8e8e8e;
`;
