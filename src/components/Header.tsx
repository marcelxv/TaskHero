import React from "react";
import { Box, Text, ToggleSwitch } from "@primer/react";

const handleBackgroundChange = () => {
  const body = document.querySelector("body");
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  body?.classList.toggle("dark");
  console.log(body)

};

function Header({ emoji }: { emoji: string }) {
  return (
    <Box  height={'80px'} display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
      <Text as={'h2'}>TaskHero {emoji} </Text>
      <a href="https://github.com/marcelxv">marcelxv</a>
      <ToggleSwitch aria-labelledby="switchLabel" onChange={handleBackgroundChange} />
    </Box>
  );
}
export default Header;
