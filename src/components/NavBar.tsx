import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Button, SubNav } from "@primer/react";
import { ZapIcon } from "@primer/octicons-react";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathMatchRoute = (path: string) => {
    if (path === location.pathname) {
      return true;
    }
  };

  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      justifyContent="space-around"
      alignItems="center"
      display="flex"
      flexDirection="row"
      backgroundColor="whitesmoke"
      width="100%"
      height="58px"
    >
      <Box>
        <SubNav aria-label="Main">
          <SubNav.Links>
            <SubNav.Link
              onClick={() => navigate("/app")}
              selected={pathMatchRoute("/app") ? true : false}
            >
              Home
            </SubNav.Link>
            <SubNav.Link
              onClick={() => navigate("/")}
              selected={pathMatchRoute("/") ? true : false}
            >
              Calendar
            </SubNav.Link>
            <SubNav.Link
              onClick={() => navigate("/about")}
              selected={pathMatchRoute("/about") ? true : false}
            >
              About
            </SubNav.Link>
            <SubNav.Link
              onClick={() => navigate("/login")}
              selected={pathMatchRoute("/login") ? true : false}
            >
              Login
            </SubNav.Link>
          </SubNav.Links>
        </SubNav>
      </Box>
    </Box>
  );
}

export default NavBar;
