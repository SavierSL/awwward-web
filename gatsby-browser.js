import React from "react"
import { GlobalProvider } from "./src/components/context/globalContext"

export const wrapRootElement = ({ element }) => {
  return <GlobalProvider>{element}</GlobalProvider>
}
