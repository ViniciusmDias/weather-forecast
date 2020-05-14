import styled from 'styled-components';

export const HeaderMenu = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 90px;
  margin-bottom: 6vh;

  @media (min-width: 760px) {
    flex-direction: row;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
    font-size: 2rem;
    font-weight: 800;
    color: #3c3c3c;
    transition: opacity 0.2s ease-in-out;
  }
  a:hover {
    opacity: 0.8;
  }
  div {
    margin-top: 2vh;
    @media (min-width: 760px) {
      margin-top: 0;
    }
    a {
      position: relative;
      color: #8e8e8e;
      font-size: 1.5rem;
    }
    a.active {
      color: #3c3c3c;
    }
    a.active:after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 100%;
      height: 0.2rem;
      background-color: black;
      -webkit-transition: width 0.2s;
      transition: width 0.2s;
    }

    a + a {
      margin-left: 2vw;
    }
  }
`;
