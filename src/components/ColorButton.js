import * as React from "react";
import { Button } from "@chakra-ui/react";
import colors from "../helpers/colors";

export default function ColorButton({ children, variant, ...props }) {
  const variantBg = colors[variant][1] || colors.blue[1];
  const variantColor = colors[variant][0] || colors.blue[0];
  function getColorPorps(color, bg) {
    return {
      color,
      bg,
      border: `1px solid ${color}`,
      _hover: {
        bg: color,
        color: bg,
        border: `1px solid ${bg}`
      }
    };
  }
  return (
    <Button {...getColorPorps(variantColor, variantBg)} {...props}>
      {children}
    </Button>
  );
}
