import React from "react";
import { Box, Text } from "@primer/react";



function Header({ emoji }: { emoji: string }) {
  return (
    <Box  height={'80px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
      <Text as={'h2'}>TaskHero {emoji} </Text>
      <a href="https://github.com/marcelxv">marcelxv</a>
    </Box>
  );
}
export default Header;
