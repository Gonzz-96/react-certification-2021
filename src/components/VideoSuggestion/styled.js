import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 5px;
`;

const Thumbnail = styled.img`
  height: 100%;
  width: 40%;
  padding-bottom: 5px;
  object-fit: fill;
`;

export { Container, Thumbnail };
