import styled from 'styled-components';

const VideoInformationContainer = styled.div`
  flex-direction: column;
  display: flex;
  height: 100%;
  flex: 3;

  @media screen and (max-width: 1000px) {
    flex: 2;
  }
`;

const SuggestionsContainer = styled.div`
  flex: 1;
  background-color: blue;
`;

const GeneralContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  display: flex;
  height: 92vh;
  width: 100vw;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const IFrame = styled.iframe`
  height: 70%;
`;

export { VideoInformationContainer, GeneralContainer, SuggestionsContainer, IFrame };
