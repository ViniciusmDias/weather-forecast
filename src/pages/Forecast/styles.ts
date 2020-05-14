import styled from 'styled-components';

export const Form = styled.form`
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
  }
`;
export const Subtitle = styled.h2`
  text-align: center;
  font-size: 1rem;
  color: #8e8e8e;
`;
