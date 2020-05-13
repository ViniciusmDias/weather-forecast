import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 1.6rem;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;

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
        height: 12vh;
      }
      li + li {
        text-decoration: none;
        width: 12.5vw;
      }
    }
  }
`;
