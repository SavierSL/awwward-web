import React, { useState } from "react"
import { Container, Flex } from "../components/styles/globalStyles"
import { Link } from "gatsby"
import {
  Nav,
  NavHeader,
  CloseNav,
  NavList,
  NavFooter,
  NavVideos,
} from "../../src/components/styles/navigationStyles"
import { motion, AnimatePresence } from "framer-motion"

const navRoutes = [
  {
    id: 0,
    title: "not humble",
    path: "/not-humble",
    video: "featured-video.mp4",
  },
  {
    id: 1,
    title: "bleeping easy",
    path: "/bleeping-easy",
    video: "easy.mp4",
  },
  {
    id: 2,
    title: "make it zero",
    path: "/make-it-zero",
    video: "make-it-zero.mp4",
  },
  {
    id: 3,
    title: "it takes an island",
    path: "/it-takes-an-island",
    video: "it-takes-an-island.mp4",
  },
  {
    id: 4,
    title: "50 beaches",
    path: "/50-beaches",
    video: "50-beaches.mp4",
  },
]
const Navigation = ({ toggleMenu, setToggleMenu, onCursor }) => {
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: "featured-video.mp4",
    key: "0",
  })
  return (
    <>
      <AnimatePresence>
        {toggleMenu ? (
          <Nav
            initial={{ y: "-100%" }}
            exit={{ y: "-100%" }}
            animate={{ y: toggleMenu ? "0" : "-100%" }}
            transition={{
              duration: 0.5,
              ease: [0.6, 0.05, -0.01, 0.9],
            }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  PROJECTS
                  <CloseNav
                    onClick={() => setToggleMenu(!toggleMenu)}
                    onMouseEnter={() => onCursor("pointer")}
                    onMouseLeave={onCursor}
                  >
                    <button>
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                  {navRoutes.map(route => {
                    const { id, title, path, video } = route
                    return (
                      <motion.li key={id}>
                        <Link to={`/projects/${path}`}>
                          <motion.div
                            key={id}
                            onHoverStart={() =>
                              setRevealVideo({
                                show: true,
                                video: route.video,
                                key: route.id,
                              })
                            }
                            onHoverEnd={() =>
                              setRevealVideo({
                                show: false,
                                video: route.video,
                                key: route.id,
                              })
                            }
                            initial={{ x: -50 }}
                            whileHover={{
                              x: 0,
                              transition: {
                                duration: 0.4,
                                ease: [0.6, 0.05, -0.01, 0.9],
                              },
                            }}
                            className="link"
                            onMouseEnter={() => onCursor("pointer")}
                            onMouseLeave={onCursor}
                          >
                            <span className="arrow">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 101 57"
                              >
                                <path
                                  d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                  fill="#FFF"
                                  fillRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            {title}
                          </motion.div>
                        </Link>
                      </motion.li>
                    )
                  })}
                </ul>
              </NavList>
              <NavFooter></NavFooter>
              <NavVideos>
                <motion.div
                  className="reveal"
                  animate={{ width: revealVideo.show ? "0%" : "100%" }}
                ></motion.div>
                <div className="video">
                  <AnimatePresence exitBeforeEnter>
                    <motion.video
                      key={revealVideo.key}
                      src={require(`../assets/videos/${revealVideo.video}`)}
                      loop
                      autoPlay
                      muted
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                      }}
                      exit={{ opacity: 0 }}
                    ></motion.video>
                  </AnimatePresence>
                </div>
              </NavVideos>
            </Container>
          </Nav>
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
