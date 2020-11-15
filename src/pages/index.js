import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HomeBanner from "../components/homePage/homeBanner"
import HomeContent from "../components/homePage/homeContent"
import HomeFeatured from "../components/homePage/homeFeatured"
import HomeAbout from "../components/homePage/homeAbout"
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../components/context/globalContext"

const IndexPage = () => {
  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }
  return (
    <Layout>
      <HomeBanner onCursor={onCursor} />
      <HomeContent />
      <HomeFeatured onCursor={onCursor} />
      <HomeAbout onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage
