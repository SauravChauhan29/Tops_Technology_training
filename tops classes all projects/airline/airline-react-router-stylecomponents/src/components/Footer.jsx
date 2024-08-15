import React from 'react'
import styled from 'styled-components'
const Footers = styled.footer`
  text-align: center;
  background: linear-gradient(to right, #1f2024, #303338, #1f2024);
  height: 100px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  
  return (
    <div>
       <Footers>
        <span>Copyright &#169; Domain Name - All Rights Reserved</span>
    </Footers>
    </div>
  )
}

export default Footer
