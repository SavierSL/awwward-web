import React, { useEffect, useRef } from "react"
import {
  Banner,
  Videos,
  Canvas,
  BannerTitle,
  HeadLine,
} from "../styles/homeStyles"

//custom hook
import useWindowSize from "../../hooks/useWindowSize"
import { useGlobalStateContext } from "../context/globalContext"

const Homebanner = () => {
  const { currentTheme } = useGlobalStateContext()
  const size = useWindowSize()
  let canvas = useRef(null)

  useEffect(() => {
    let renderingELement = canvas.current
    let drawingElement = renderingELement.cloneNode()

    let drawingCtx = drawingElement.getContext("2d")
    let renderingCtx = renderingELement.getContext("2d")

    let lastX
    let lastY

    let moving = false
    renderingCtx.globalCompositeOperation = "source-over"
    renderingCtx.fillStyle = currentTheme === "light" ? "#ffffff" : "#000000"

    console.log(renderingCtx.fillStyle)
    renderingCtx.fillRect(0, 0, size.width, size.height)

    renderingELement.addEventListener("mouseover", ev => {
      moving = true
      lastX = ev.pageX - renderingELement.offsetLeft
      lastY = ev.pageY - renderingELement.offsetTop
    })

    renderingELement.addEventListener("mouseup", ev => {
      moving = false
      lastX = ev.pageX - renderingELement.offsetLeft
      lastY = ev.pageY - renderingELement.offsetTop
    })

    renderingELement.addEventListener("mousemove", ev => {
      if (moving) {
        drawingCtx.globalCompositeOperation = "source-over"
        renderingCtx.globalCompositeOperation = "destination-out"
        let currentX = ev.pageX - renderingELement.offsetLeft
        let currentY = ev.pageY - renderingELement.offsetTop
        drawingCtx.lineJoin = "round"
        drawingCtx.moveTo(lastX, lastY)
        drawingCtx.lineTo(currentX, currentY)
        drawingCtx.closePath()
        drawingCtx.lineWidth = 120
        drawingCtx.stroke()
        lastX = currentX
        lastY = currentY
        renderingCtx.drawImage(drawingElement, 0, 0)
      }
    })
  }, [currentTheme])

  const parent = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const child = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  return (
    <Banner>
      <Videos>
        <video
          height="100%"
          width="100%"
          loop
          src={require("../../assets/videos/video.mp4")}
          autoPlay
          muted
        />
      </Videos>

      <Canvas height={size.height} width={size.width} ref={canvas}></Canvas>
      <BannerTitle variants={parent} initial="initial" animate="animate">
        <HeadLine variants={child}> Dig </HeadLine>
        <HeadLine variants={child}> DEEP </HeadLine>
      </BannerTitle>
    </Banner>
  )
}

export default Homebanner
