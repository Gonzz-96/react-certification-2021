import styled from 'styled-components';

const Title = styled.p`
  font-size: 2.5rem;
  text-align: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
`;

const GridContainer = styled.div`
  display: grid;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  grid-template-columns: 20% 20% 20% 20%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
  padding-bottom: 20px;

  @media screen and (max-width: 1450px) {
    grid-template-columns: 25% 25% 25%;
  }

  @media screen and (max-width: 1100px) {
    grid-template-columns: 30% 30%;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 80%;
  }
`;

export { GridContainer, Title };
