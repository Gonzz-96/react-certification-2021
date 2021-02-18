import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header'

const Title = styled.p`
  font-size: 2rem;
  text-align: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-row-gap: 10px;
  justify-content: space-around;
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: ${props => props.color || 'green'};
`;

const HomePage = () => {
  return (
    <>
      <Header />
      <Title>Welcome to my minichallenge :)</Title>
      <GridContainer>
        <Box color="red"></Box>
        <Box color="blue"></Box>
        <Box></Box>
        <Box color="red"></Box>
        
        <Box color="red"></Box>
        <Box color="blue"></Box>
        <Box></Box>

      </GridContainer>
    </>
  );
}

export default HomePage;
