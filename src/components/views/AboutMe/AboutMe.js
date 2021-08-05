import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "@material-ui/core";
import { Container } from "@material-ui/core";
import image from "../../../images/image.jpg";
import reactImage from "../../../images/react.svg.png";
import reduxImage from "../../../images/redux.png";
import routerImage from "../../../images/router.png";
import htmlImage from "../../../images/html.svg.png";
import cssImage from "../../../images/css.png";
import scssImage from "../../../images/scss.svg.png";
import styledImage from "../../../images/styled.png";
import nodeImage from "../../../images/node.svg.png";
import mongoImage from "../../../images/mongo.svg";
import materialImage from "../../../images/material.png";
import jestImage from "../../../images/jest.png";
import javascriptImage from "../../../images/javascript.svg";
import gitImage from "../../../images/git.png";
import chaiImage from "../../../images/chai.png";
import bootstrapImage from "../../../images/bootstrap.svg";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Overlay = styled.div`
  background-image: url("https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  width: 100%;
  height: 100vh;
`;

const Root = styled.div`
  color: ${({ font }) => font};
  width: 100%;
  height: calc(100vh - 80px);
  padding-top: 80px;
  background: ${({ background }) => background};
  position: relative;
`;

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const ContainerRoot = styled(Container)`
  display: flex !important;
  height: 100%;
`;

const Btn = styled.span`
  width: 100%;
  text-align: center;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  background: ${({ btn, font }) => btn && font};
  color: ${({ btn, background }) => btn && background};
  ${({ btn, font }) => `border-bottom: 2px solid ${font}`};
`;

const ImageWrapper = styled.div`
  padding-right: 20px;
`;

const Image = styled.img`
  width: 250px;
  border-radius: 50%;
  height: 250px;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  display: ${({ btn }) => (btn ? `flex` : `none`)};
  flex-direction: column;
  padding-top: 15px;
  align-items: center;
  justify-content: center;
  }
`;

const Text = styled.p`
  font-size: 19px;
  margin: 0;
  line-height: 25px;
  padding-bottom: 10px;
`;

const Icon = styled.img`
  height: 35px;
  object-fit: cover;
  padding-right: 10px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 19px;
  padding: 5px 8px;
`;

const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 20px;

  h2 {
    margin: 0;
  }
  div {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Info = styled.div`
  display: flex;
`;

const SocialIconWrapper = styled.a`
  width: 60px;
  height: 60px;
  margin: 40px;
  color: inherit;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const Social = styled.div`
  display: flex;
`;
const AboutMe = () => {
  const theme = useTheme().palette.secondary;
  const [btn, setBtn] = useState("aboutMe");

  return (
    <Overlay>
      <Root background={theme.main} font={theme.font}>
        <ContainerRoot>
          <Wrapper>
            <Btn
              onClick={() => setBtn("aboutMe")}
              btn={btn === "aboutMe" && true}
              font={theme.font}
              background={theme.main}
            >
              About me
            </Btn>
            <ContentWrapper btn={btn === "aboutMe" && true}>
              <Info>
                <ImageWrapper>
                  <Image src={image} />
                </ImageWrapper>
                <div>
                  <Text>Hi there!</Text>
                  <Text>
                    My name is Damian Filipek and I'm 22 years old. In November
                    2020 I strated my jurney with programming. Since then I’m
                    spending 40 to 50 hours per week mastering my skills. In my
                    portfolio I already have many projects, with which I am very
                    satisfied and willing to share.
                  </Text>
                  <Text>
                    Apart from programming in my spare time i relly enjoy
                    playing chess, reading some criminal or waching F1 races
                    with a group of friends.
                  </Text>
                </div>
              </Info>
              <Social>
                <SocialIconWrapper href="https://github.com/damianfilipek81">
                  <GitHubIcon />
                </SocialIconWrapper>
                <SocialIconWrapper href="https://www.linkedin.com/in/damianfilipek81/">
                  <LinkedInIcon />
                </SocialIconWrapper>
              </Social>
            </ContentWrapper>
          </Wrapper>
          <Wrapper>
            <Btn
              onClick={() => setBtn("mySkills")}
              btn={btn === "mySkills" && true}
              font={theme.font}
              background={theme.main}
            >
              My skills
            </Btn>
            <ContentWrapper btn={btn === "mySkills" && true}>
              <SkillsContainer>
                <h2>Logic</h2>
                <div>
                  <IconWrapper>
                    <Icon src={javascriptImage} />
                    Javascript
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={reactImage} />
                    React
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={reduxImage} />
                    React Redux
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={reduxImage} />
                    Redux Thunk
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={routerImage} />
                    React Router
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={nodeImage} />
                    NodeJS
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={nodeImage} />
                    ExpressJS
                  </IconWrapper>
                </div>
              </SkillsContainer>
              <SkillsContainer>
                <h2>Styling</h2>
                <div>
                  <IconWrapper>
                    <Icon src={htmlImage} />
                    HTML
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={cssImage} />
                    CSS
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={scssImage} />
                    SCSS
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={styledImage} />
                    Styled Components
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={bootstrapImage} />
                    Bootstrap
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={materialImage} />
                    Material Ui
                  </IconWrapper>
                </div>
              </SkillsContainer>
              <SkillsContainer>
                <h2>Database</h2>
                <div>
                  <IconWrapper>
                    <Icon src={mongoImage} />
                    MongoDB
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={mongoImage} />
                    Mongoose
                  </IconWrapper>
                </div>
              </SkillsContainer>
              <SkillsContainer>
                <h2>Testing</h2>
                <div>
                  <IconWrapper>
                    <Icon src={jestImage} />
                    Jest
                  </IconWrapper>
                  <IconWrapper>
                    <Icon src={chaiImage} />
                    Chai
                  </IconWrapper>
                  <IconWrapper>Enzyme</IconWrapper>
                </div>
              </SkillsContainer>
              <SkillsContainer>
                <h2>Other</h2>
                <div>
                  <IconWrapper>
                    <Icon src={gitImage} />
                    Git
                  </IconWrapper>
                  <IconWrapper>Jira</IconWrapper>
                </div>
              </SkillsContainer>
            </ContentWrapper>
          </Wrapper>
        </ContainerRoot>
      </Root>
    </Overlay>
  );
};

export default AboutMe;
