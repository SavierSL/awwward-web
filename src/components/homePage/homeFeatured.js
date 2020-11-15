import React, { useState, useEffect } from "react"
import { Container, Flex } from "../styles/globalStyles"
import {
  HomeFeaturedSectionn,
  FeaturedContent,
  FeaturedVideo,
  FeauturedProject,
} from "../styles/homeStyles"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

const HomeFeatured = ({ onCursor }) => {
  const [hovered, setHovered] = useState(false)
  const animation = useAnimation()
  const [refFeatured, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })
  useEffect(() => {
    console.log(inView)
    if (inView) {
      animation.start("visible")
    }
  }, [inView, animation])
  console.log(onCursor)
  return (
    <HomeFeaturedSectionn
      ref={refFeatured}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
            ease: [0.6, 0.05, -0.01, 0.9],
          },
        },
        hidden: {
          y: 100,
          opacity: 0,
        },
      }}
    >
      <Container>
        <Link>
          <FeaturedContent
            onHoverStart={() => setHovered(!hovered)}
            onHoverEnd={() => setHovered(!hovered)}
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Flex spaceBetween>
              <h3>Featured Project</h3>
              <div className="meta">
                <h4>PEI SeaFood</h4>
                <h4>2019</h4>
              </div>
            </Flex>
            <h2 className="featured-title">
              NOT <br /> HUMBLLE
              <span className="arrow">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 101 57"
                  animate={{ x: hovered ? 45 : 0 }}
                  transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
                >
                  <path
                    d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                    fill="#FFF"
                    fillRule="evenodd"
                  ></path>
                </motion.svg>
              </span>
            </h2>
          </FeaturedContent>
          <FeaturedVideo>
            <video
              loop
              autoPlay
              muted
              src={require("../../assets/videos/featured-video.mp4")}
            ></video>
          </FeaturedVideo>
        </Link>
      </Container>
      <Container>
        <FeauturedProject>
          <Flex flexEnd>
            <button>
              <span>ALL PROJECTS</span>
            </button>
          </Flex>
        </FeauturedProject>
      </Container>
    </HomeFeaturedSectionn>
  )
}

export default HomeFeatured
