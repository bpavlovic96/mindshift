import React, { createContext, useContext, useState, ReactNode } from "react";

type Context = {
  buttonClicked: boolean;
  setButtonClicked: React.Dispatch<React.SetStateAction<boolean>>;
  onButtonClick: () => void;
  onLogoClick: () => void;
};

type SharedContextProviderProps = {
  children: ReactNode;
};

const SharedContext = createContext<Context | undefined>(undefined);

export const SharedContextProvider: React.FC<SharedContextProviderProps> = ({
  children,
}) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const onButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const onLogoClick = () => {
    setButtonClicked(true);
  };

  const contextValue: Context = {
    buttonClicked,
    setButtonClicked,
    onButtonClick,
    onLogoClick,
  };

  return (
    <SharedContext.Provider value={contextValue}>
      {children}
    </SharedContext.Provider>
  );
};

export const useSharedContext = (): Context => {
  const context = useContext(SharedContext);
  if (!context) {
    throw new Error("Used once in ContextProvider");
  }
  return context;
};
