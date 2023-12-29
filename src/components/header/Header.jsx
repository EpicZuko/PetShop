import React from 'react'
import styled from 'styled-components'
import petshopIcons from '../../assets/icons/Frame 6.png'

const Header = () => {
   return (
      <HeaderStyled>
         <div>
            <img src={petshopIcons} alt="icons" />
         </div>
         <Navigation>
            <ul>
               <li>
                  <NavLink href="https://www.w3schools.com">Home</NavLink>
               </li>
               <li>
                  <NavLink href="https://www.w3schools.com">About</NavLink>
               </li>
               <li>
                  <NavLink href="https://www.w3schools.com">Services</NavLink>
               </li>
               <li>
                  <NavLink href="https://www.w3schools.com">Pages</NavLink>
               </li>
               <li>
                  <NavLink href="https://www.w3schools.com">Cart</NavLink>
               </li>
               <li>
                  <ContactButton>
                     <NavLink href="https://www.w3schools.com">
                        Contact Us
                     </NavLink>
                  </ContactButton>
               </li>
            </ul>
         </Navigation>
      </HeaderStyled>
   )
}

export default Header

const HeaderStyled = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 10px 168px;
`

const Navigation = styled.nav`
   ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      width: 682px;
   }
`

export const NavLink = styled.a`
   text-decoration: none;
   color: var(--Dark-Dark-1, #5a5a5a);
   font-feature-settings:
      'clig' off,
      'liga' off;

   font-family: Poppins;
   font-size: 16px;
   font-style: normal;
   font-weight: 600;
   line-height: 22px;
`

export const ContactButton = styled.button`
   border-radius: 6px;
   background: var(--Primary-Main, #f87661);
   border: none;
   box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.12);
   width: 124px;
   padding: 12px 16px;
   justify-content: center;
   align-items: center;
   gap: 4px;
   a {
      color: var(--Neutral-HF-10, #fff);
      text-align: center;

      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: -0.084px;
   }
   &:hover {
      background-color: #0056b3;
   }
`
