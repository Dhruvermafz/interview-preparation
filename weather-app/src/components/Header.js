import React from "react";
import styled from "styled-components";

const Header = ({ location, toggleDarkMode, isDarkMode }) => {
  return (
    <HeaderContainer>
      <Location>{location}</Location>
      <ToggleButton onClick={toggleDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </ToggleButton>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: ${(props) => props.theme.headerBg};
  color: ${(props) => props.theme.headerText};
`;

const Location = styled.div`
  font-size: 1.5rem;
`;

const ToggleButton = styled.button`
  padding: 10px;
  background-color: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  border: none;
  cursor: pointer;
`;

export default Header;
