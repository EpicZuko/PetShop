import React from 'react'
import styled from 'styled-components'
import { ContactButton, NavLink } from './Header'

const HeaderCenter = () => {
   return (
      <HeaderCenterContainer>
         <TextContent>
            <HeaderText>Your little friend can trust</HeaderText>
            <HeaderTextPara>
               We believe finding a reliable, professional pet sitter should be
               easy. So we make sure every member of our Family.
            </HeaderTextPara>
            <ContactButton>
               <NavLink href="https://www.w3schools.com">Contact Us</NavLink>
            </ContactButton>
         </TextContent>
         <ShapeContainer>
            <ShapeDiv width="194px" height="310px" />
            <ShapeDiv width="279px" height="446px" />
         </ShapeContainer>
      </HeaderCenterContainer>
   )
}

export default HeaderCenter

const HeaderCenterContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   max-width: 1570px;
   margin: 0 auto;
   padding: 69px 0px 0px 0px; /* Adjust as needed */
`

const TextContent = styled.div`
   flex: 1;
`

const HeaderText = styled.h1`
   font-family: 'Poppins', sans-serif;
   font-size: 52px;
   font-weight: 700;
   line-height: 64px;
   letter-spacing: -0.52px;
   color: var(--Dark-Dark-0, #333);
   width: 90%; /* Adjust as needed for responsiveness */
`

const HeaderTextPara = styled.p`
   color: var(--Dark-Dark-2, #828282);
   font-family: Poppins;
   font-size: 16px;
   font-weight: 400;
   line-height: 24px;
   letter-spacing: -0.176px;
   width: 66%; /* Adjust as needed for responsiveness */
`

const ShapeContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 46px;
`

const ShapeDiv = styled.div`
   width: ${(props) => props.width};
   height: ${(props) => props.height};
   flex-shrink: 0;
   opacity: 0.3;
   background: var(--Primary-Main, #f87661);
   mix-blend-mode: multiply;
   border-radius: 200px;
`
