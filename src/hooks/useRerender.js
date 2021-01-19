import * as React from "react";

export default function useRerender() {
  return React.useReducer(() => [])[1];
}
