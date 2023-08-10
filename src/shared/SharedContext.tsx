import { useContext } from "react";
import { SharedContext } from "./ContextProvider";

const useSharedContext = () => {
  const context = useContext(SharedContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
};

export default useSharedContext;
