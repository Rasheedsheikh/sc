import React from "react";
import { StyledButton } from "./App.styled.js";


 export const Button = () => {
  return (
    <>
      <StyledButton
        bgColor={"blue"}
        
        border={"none"}
        color={"blue"}
        
        radius={"5px"}
      >

        Primary Button
      </StyledButton>
      <StyledButton

      bgColor={"#fff"}
      radius={"5px"}
      // padding={"4px 8px"}
      color={"black"}
        border={"solid"}
        // margin={"10px 4px"}
      >
        Default Button
      </StyledButton>
      <StyledButton
        color={"#111"}
        bgColor={"#fff"}
        radius={"4px"}
        // padding={"4px 8px"}
        border={"dashed"}
        // margin={"10px 4px"}
      >
        Dashed Button
      </StyledButton>
      <StyledButton
        color={"#111"}
        bgColor={"#fff"}
        radius={"4px"}
        padding={"4px 8px"}
        border={"dashed"}
        margin={"10px 4px"}
      >
        Text Button
      </StyledButton>
      <StyledButton
        color={"#2490FE"}
        bgColor={"#fff"}
        radius={"4px"}
        padding={"4px 8px"}
        border={"none"}
        margin={"10px 4px"}
      >
        Link Button
      </StyledButton>
    </>
  );
};
