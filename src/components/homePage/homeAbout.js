import React, { useState } from "react"
import { Container, Flex } from "../styles/globalStyles"
import { motion } from "framer-motion"
import {
  AboutHome,
  About,
  Services,
  AccordionHeader,
  AccordionIcon,
  AccordionContent,
} from "../styles/homeStyles"
import { useGlobalStateContext } from "../context/globalContext"

//Accordion Data
const accordionIds = [
  {
    id: 0,
    title: "Pre-Production",
    results: [
      "Creative Development",
      "Writing",
      "Creative Development",
      "Writing",
      "Storyboards",
      "Art Direction",
      "Creative Direction",
      "Location Scouting",
      "Casting",
    ],
  },
  {
    id: 1,
    title: "Video Production",
    results: [
      "Principle Photography",
      "Production Management",
      "Crew",
      "Dailies",
      "LTO-Archiving",
    ],
  },
  {
    id: 2,
    title: "Post-Production",
    results: [
      "Colour correction",
      "Offline editing",
      "Online editing",
      "VFX",
      "Animation and motion graphics",
      "Closed captioning and subtitles",
      "Descriptive video",
      "Dailies",
      "Quality control",
      "LTO Archiving",
    ],
  },
  {
    id: 3,
    title: "Audio Post-Production",
    results: [
      "We work with some amazing partners who provide:",
      "Sound Design",
      "SFX",
      "Music",
      "Sound Mix",
    ],
  },
]
const HomeAbout = ({ onCursor }) => {
  const [expanded, setExpanded] = useState(0)

  return (
    <AboutHome>
      <Container>
        <Flex alignTop>
          <About>
            <h2>I am Xavier San Lorenzo</h2>
            <p>
              HAHAHA awesome HAHAHA awesome HAHAHA awesomeHAHAHA awesomeHAHAHA
              awesome HAHAHA awesome HAHAHA awesome HAHAHA awesome HAHAHA
              awesome HAHAHA awesome HAHAHA awesome HAHAHA awesome HAHAHA
              awesome HAHAHA awesome
            </p>
          </About>
          <Services>
            <h3>Services</h3>
            {accordionIds.map((data, index) => {
              return (
                <Accordion
                  key={data.id}
                  datas={data}
                  expanded={expanded}
                  setExpanded={setExpanded}
                  onCursor={onCursor}
                />
              )
            })}
          </Services>
        </Flex>
      </Container>
    </AboutHome>
  )
}
const Accordion = ({ datas, expanded, setExpanded, onCursor }) => {
  const isOpen = expanded === datas.id
  const [hovered, setHovered] = useState(false)
  const { currentTheme } = useGlobalStateContext()

  return (
    <>
      <AccordionHeader
        onClick={() => setExpanded(isOpen ? false : datas.id)}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={onCursor}
        whileHover={{
          color: currentTheme === "dark" ? "#ffffff" : "#000000",
        }}
      >
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen ? 0 : 45, x: 3 }}
            transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen ? 0 : -45, x: -3 }}
            transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
        </AccordionIcon>
        {datas.title}
      </AccordionHeader>
      <AccordionContent
        animate={{ height: isOpen ? "100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {datas.results.map((result, index) => {
          return <span key={index}>{result}</span>
        })}
      </AccordionContent>
    </>
  )
}

export default HomeAbout
