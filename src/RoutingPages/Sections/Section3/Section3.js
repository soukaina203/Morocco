import React from 'react'
import Paragraphe from '../../../Paragraphes&Images/Paragraphes/Paragraphes'
import './sec3.css'
function Section3() {
  return (
    <div className='CoachPara'>
      <Paragraphe title={"Who is the coach of the moroccan national team ?"} />
      <img src="15.png" alt="" className='walid' />
      <div className='walidPara'>
        <Paragraphe Text={"WALID REGRAGUI born 23 September 1975) is a Moroccan football manager and a retired professional footballer who played as a defender. He is the head coach of the Morocco national football team.Born in France, Regragui was a full international for Morocco. Clubs he played for include Toulouse, AC Ajaccio, Grenoble and Racing Santander. In the summer of 2009, he moved from Grenoble to Moroccan side Moghreb Tétouan for his last playing career."} />
        <Paragraphe Text={"He has been widely praised for his leadership of the Morocco team following their 2022 FIFA World Cup quarterfinal win against Portugal, in which Morocco became the first African team to reach a World Cup semi-final."} />
      </div>
    </div>
  )
}

export default Section3