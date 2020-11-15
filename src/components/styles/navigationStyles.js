import styled from "styled-components"
import { motion } from "framer-motion"

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: red;
  color: #000;
  z-index: 100;
  overflow: hidden;
`
export const NavHeader = styled.div`
  top: 72px;
  position: relative;
  z-index: 999;

  h2 {
    color: ${props => props.theme.background};
  }
`
export const CloseNav = styled.div`
  // transform-origin: center;
  // border: none;
  // padding: 20px;
  // background: blue;
  // outline: none;
  span {
    width: 36px;
    height: 8px;
    display: block;
    background: ${props => props.theme.background};
    margin: 8px;
  }
`
export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  margin-left: 5rem;
  align-items: center;
  ul {
    padding: 0;
    li {
      width: 15rem;
      list-style: none;
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: 900;
      height: 50px;
      line-height: 96px;
      overflow: hidden;
      .link {
        position: relative;
        display: flex;
        top: -40%;
        align-items: center;
        color: ${props => props.theme.background};
        .arrow {
          height: 76px;
          margin-right: 8px;
          svg {
            width: 50px;
            path {
              fill: ${props => props.theme.background};
            }
          }
        }
      }
    }
  }
`
export const NavFooter = styled.div``
export const NavVideos = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 35%;
  heigth: 100%;
  width: 100%;
  .reveal {
    width: 100%;
    background: red;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
  .video {
    position: absolute;
    heigth: 100vh;
    marggin: 0;
    z-index: -1;
    video {
      height: 100vh;
    }
  }
`
