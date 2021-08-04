import React from "react";
import styled from "styled-components";
import BackgroundVideo from "../../features/BackgroundVideo/BackgroundVideo";
import Form from "../../features/Form/Form";

const Root = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Home = () => {
  return (
    <Root>
      <BackgroundVideo>
        <Form />
      </BackgroundVideo>
    </Root>
  );
};
