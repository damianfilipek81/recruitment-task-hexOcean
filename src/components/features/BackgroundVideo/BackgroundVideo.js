import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import video from "../../../videos/video.mp4";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
`;

const Overlay = styled.div`
  background: rgb(196, 76, 184);
  background: linear-gradient(
    90deg,
    rgba(196, 76, 184, 1) 0%,
    rgba(121, 9, 115, 1) 50%,
    rgba(221, 0, 134, 1) 100%
  );
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

const BackgroundVideo = ({ children }) => {
  const myRef = useRef(null);
  const setPlayBack = () => {
    myRef.current.playbackRate = 0.8;
  };
  return (
    <Container>
      <Overlay />
      <Video
        autoPlay="autoplay"
        loop="loop"
        muted
        ref={myRef}
        onCanPlay={() => setPlayBack()}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
      {children}
    </Container>
  );
};
BackgroundVideo.propTypes = {
  children: PropTypes.node,
};
export default BackgroundVideo;
