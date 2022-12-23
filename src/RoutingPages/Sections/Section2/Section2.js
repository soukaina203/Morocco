import React from 'react'
import './section2.css'
import Paragraphe from '../../../Paragraphes&Images/Paragraphes/Paragraphes'
function Section2() {
  return (
    <div className='everyThing'>
      <div className='paraSec1'>
        <Paragraphe title={"The Participations of the Moroccan national team in the world cups"} Text={"Morroco has qualified for the final stages of the FIFA World Cup on six occasions, which were in 1970,1986,1994,1998,2018 and 2022. Their best performances were in 1986 and 2022, where they reached the round of 16."} />
        <Paragraphe title={"Morocco in Qatar world cup 2022"} Text={""} />
      </div>
      <div className='pics'>
        <img src="4.png" alt="" className='moroccanFlag1' />
        <img src="1.png" alt="" className='moroccanFlag2' />
      </div>
      <div className='afterFlag'>
        <Paragraphe Text={"the Moroccan national team  did a really incredible performance in qatar world cup he progressed into the FIFA World Cup Round of 16 after its 2-1 win against Canada in a Group F fixture on Thursday at the AL Thumama stadium. This is the first time that Morocco has qualified to the knockouts since the 1986 World Cup, where it lost to West Germany in the Round of 16."} />
      </div>
    </div>
  )
}

export default Section2