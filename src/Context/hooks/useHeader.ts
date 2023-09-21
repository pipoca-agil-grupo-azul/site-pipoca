import { useContext } from "react";
import { HeaderContext } from "../contexts/HeaderContext/HeaderContext";

export default function useHeader() {
  return useContext(HeaderContext);
}
