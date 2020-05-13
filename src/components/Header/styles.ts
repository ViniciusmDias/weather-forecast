import styled from 'styled-components';

export const HeaderMenu = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  margin-bottom: 6vh;
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
    a {
      position: relative;
      color: #8e8e8e;
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
