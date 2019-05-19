import React from "react"
import styled from "styled-components"
import {Hackicon} from '../icons/codingicon'

const Sectop = styled.section`
  position: relative;
  overflow: hidden;
  margin-bottom: 2px;
`
const Titles = styled.h3`
  color: #2d7795;
  font-size: 18px;
  margin-top: 0px;
  margin-bottom:1;
  font-weight: 500px;
`
const Time = styled.div`
  position:relative;
  overflow: hidden;
  margin-bottom:2px;
`
const MainTitle = styled.h2`
  display:block;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 500;
    color: #2d7788;
    position: relative;
    margin-top: 0;
    margin-bottom: 20px;
`
const SectionThree = () => (
  <section>
      <MainTitle><div><Hackicon></Hackicon></div>
      Experience
        </MainTitle>
      <div>
         <Sectop>
             <h1>THE MASTER LOCK COMPANY</h1>
             <br></br>
           <Titles>Quality lab Technician</Titles>
           <Time>May 2016 -Present 3 yrs 1 mo</Time>
           <br></br>
         </Sectop>
         <div>
             <Time>
             Analyzed and interpreted blueprints, data and manuals to determine precise specifications. 
             Inspect, tested and measured materials, products and installations to spec. 
             Write programs for Zeiss Duramax using calypso 2018. 
             Write and present reports to engineers using Microsoft word, excel, and power point. 
             Gather information from QC-CALC for reports.
             </Time>
         </div>
         <div>
         <br></br>
         <Sectop>
             <h1>HELGESEN INDUSTRIES INC </h1>
             <br></br>
           <Titles>Quality Technician / Supervisor Assistant</Titles>
           <Time>Apr 2015 – May 2016 Duration1 yr 2 mos</Time>
           <br></br>
         </Sectop>
         
         <div>
             <Time>
             Analyzed and interpreted blueprints, data and manuals to determine precise specifications. 
             Inspect, tested and measured materials, products and installations to spec. 
             Write programs for Zeiss Duramax using calypso 2018. 
             Write and present reports to engineers using Microsoft word, excel, and power point. 
             Gather information from QC-CALC for reports.
             </Time>
         </div>
         </div>
         </div>
  </section>
)



export default SectionThree