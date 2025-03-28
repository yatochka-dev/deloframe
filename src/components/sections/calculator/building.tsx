import React from 'react'
import { motion } from 'framer-motion'

interface BuildingProps {
  stories: 1 | 2
  easing?: [number, number, number, number]
}

const Building: React.FC<BuildingProps> = ({ stories, easing = [0.42, 0, 0.58, 1] }) => {
  return (
    <motion.svg
      width={stories === 1 ? '834' : '857'}
      height={stories === 1 ? '667' : '686'}
      viewBox={stories === 1 ? '0 0 834 667' : '0 0 857 686'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ d: stories === 1 ? pathDataOneStory : pathDataTwoStory }}
      transition={{ duration: 1, ease: easing }}
    >
      <g id={stories === 1 ? 'one-story' : 'two-story'}>
        <g id={stories === 1 ? 'inputBlock_pictogram_1floor' : 'inputBlock_pictogram_2floor'}>
          <motion.path
            d={stories === 1 ? pathDataOneStory : pathDataTwoStory}
            stroke="black"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
        </g>
      </g>
    </motion.svg>
  )
}

const pathDataOneStory = 'M647.153 413.058L329.753 528.548V405.247L647.153 289.758V413.058Z'
const pathDataTwoStory = 'M664.999 424.825L338.847 543.605V297.221L664.999 178.441V424.825Z'

export default Building
