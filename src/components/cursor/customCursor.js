import React, { useEffect, useState } from "react"
import { Cursor } from "../styles/globalStyles"
import { useGlobalDispatchContext } from "../context/globalContext"

import { useGlobalStateContext } from "../context/globalContext"

const CustomCursor = ({ toggleMenu }) => {
  const { cursorType } = useGlobalStateContext()
  const [mousePosition, setMousePoisition] = useState({
    x: 400,
    y: 400,
  })

  const onMouseMove = event => {
    const { pageX: x, pageY: y } = event
    setMousePoisition({ x, y })
  }

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)
    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])
  console.log(cursorType)
  return (
    <>
      <Cursor
        className={`${!!cursorType ? "hovered" : ""} ${
          toggleMenu ? "nav-open" : ""
        } ${cursorType}`}
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      />
    </>
  )
}

export default CustomCursor
