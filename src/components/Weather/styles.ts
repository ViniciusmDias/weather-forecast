import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 6vh;

  h1 {
    text-align: center;
    font-size: 1.6rem;
    margin-bottom: 2vh;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    ul:nth-child(1) li {
      font-weight: 800;
      font-size: 1rem;
    }
    ul {
      display: flex;
      list-style: none;
      justify-content: center;
      align-items: center;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        width: 25vw;
        height: 10vh;
        font-weight: 700;
        font-size: 1rem;
      }
      li + li {
        font-weight: 400;
        font-size: 0.8rem;
      }
    }
  }
`;
