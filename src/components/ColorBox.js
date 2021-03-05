import React from "react";
import { Box } from "@chakra-ui/react";
import colors from "../helpers/colors";

function ColorBox({ children, variant, ...props }, ref) {
  const variantColor = colors[variant][1] || colors.blue[1];
  const variantBg = colors[variant][0] || colors.blue[0];
  function getColorPorps(color, bg) {
    return {
      color,
      bg,
      border: `1px solid ${color}`
    };
  }
  return (
    <Box {...getColorPorps(variantColor, variantBg)} {...props} ref={ref}>
      {children}
    </Box>
  );
}

export default React.forwardRef(ColorBox);
