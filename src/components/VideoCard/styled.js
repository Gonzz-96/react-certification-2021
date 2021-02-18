import styled from 'styled-components';

const CardContainer = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  border-radius: 5px 5px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

const Thumbnail = styled.img`
  height: 40%;
  width: 100%;
  object-fit: cover;
  border-radius: 5px 5px 0px 0px;
`;

const Title = styled.p`
  margin: 10px;
  font-size: 20px;
`;

const Description = styled.p`
  margin: 0px 10px 10px 10px;
  font-size: 14px;
  color: #8e8e8e;
`;

export { CardContainer, Thumbnail, Title, Description };
