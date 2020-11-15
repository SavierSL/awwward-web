import React, { useEffect } from "react"
import { Container } from "../styles/globalStyles"
import { HomeContents, Content } from "../styles/homeStyles"
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

const HomeContent = () => {
  const animation = useAnimation()
  const [refContent, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-150px",
  })
  useEffect(() => {
    console.log(inView)
    if (inView) {
      animation.start("visible")
    }
  }, [inView, animation])
  console.log(inView)
  return (
    <HomeContents
      ref={refContent}
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
        <Content>
          BELIEVE IN YOURSELF BRO | BELIEVE IN YOURSELF BRO | BELIEVE IN
          YOURSELF BRO | BELIEVE IN YOURSELF BRO | BELIEVE IN YOURSELF BRO |
          BELIEVE IN YOURSELF BRO | BELIEVE IN YOURSELF BRO| BELIEVE IN YOURSELF
          BRO| BELIEVE IN YOURSELF BRO| BELIEVE IN YOURSELF BRO| BELIEVE IN
          YOURSELF BRO| BELIEVE IN YOURSELF BRO
        </Content>
      </Container>
    </HomeContents>
  )
}

export default HomeContent
