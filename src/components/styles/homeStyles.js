import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const Banner = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 296px;
`

export const Videos = styled.div`
  height: 100%;
  width: 100%;
  video {
    object-fit: cover;
  }
`
export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  heigth: 100%;
  display: block;
`

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: -200px;
  left: -18px;
  color: ${props => props.theme.text};
  pointer-events: none;
`
export const HeadLine = styled(motion.span)`
  display: block;
  font-size: 23rem;
  font-weight: 900px;
  line-height: 0.76;
`

// Home Content
export const HomeContents = styled(motion.div)`
  margin-bottom: 10rem;
`
export const Content = styled.div`
  color: ${props => props.theme.text};
  width: 40rem;
`
export const HomeFeaturedSectionn = styled(motion.div)`
  position: relative;
  margin-bottom: 200px;

  a {
    margin-bottom: 200px;
    position: relative;
    display: block;
  }
`
export const FeaturedContent = styled(motion.div)`
  height: 480px;
  width: 100%;
  padding: 56px 124px;
  box-sizing: border-box;
  color: ${props => props.theme.text};
  h3 {
    font-size: 1.4rem;
  }
  .meta {
    display: flex;
    h4 {
      &:last-child {
        margin-left: 1rem;
      }
    }
  }
  .featured-title {
    position: absolute;
    bottom: -128px;
    font-size: 7rem;
    line-height: 90px;

    .arrow {
      width: 800px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;
      svg {
        height: 5rem;
        position: absolute;

        left: -180px;
        width: 350px;
        path {
          fill: ${props => props.theme.text};
        }
      }
    }
  }
`
export const FeaturedVideo = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 480px;
  top: 0;
  // display: block;
  overflow: hidden;
`
export const FeauturedProject = styled.div`
  margin-top: -150px;
  button {
    background: red;
    color: #fff;
    padding: 1rem;
    position: relative;
    span {
      margin-right: 108px;
      display: block;
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 20px;
      width: 35px;
      height: 7px;
      display: block;
      background: #fff;
      transform: translateY(-50%);
    }
    &:before {
      margin-top: -8px;
    }
    &:after {
      margin-top: 8px;
    }
  }
`
// About Styles

export const AboutHome = styled.div``
export const About = styled.div`
  color: ${props => props.theme.text};
`
export const Services = styled.div`
  color: ${props => props.theme.text};
`

// Accordion
export const AccordionHeader = styled(motion.div)`
  display: flex;
  color: red;
  width: 10rem;
`
export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;

  span {
    height: 4px;
    width: 8px;
    background: red;
  }
`
export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  color: red;
  width: 100%;
  line-height: 1.4rem;

  span {
    display: block;
    margin-left: 1rem;
  }
`
