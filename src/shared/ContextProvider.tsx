import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type Context = {
  buttonClicked: boolean;
  setButtonClicked: Dispatch<SetStateAction<boolean>>;
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
  showAbout: string;
  setShowAbout: Dispatch<SetStateAction<string>>;
  onButtonClick: () => void;
  onLinkClick: () => void;
  onLogoClick: () => void;
  aboutPageRender: (to: string) => void;
};

export const SharedContext = createContext<Context | undefined>(undefined);

type SharedContextProviderProps = {
  children: ReactNode;
};

const useButtonState = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAbout, setShowAbout] = useState("");

  const onButtonClick = () => {
    setButtonClicked((prevButtonClicked) => !prevButtonClicked);
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  const onLinkClick = () => {
    setButtonClicked(true);
  };

  const onLogoClick = () => {
    isExpanded ? setButtonClicked(true) : setButtonClicked(false);
  };

  const aboutPageRender = (to: string) => {
    setShowAbout(to);
  };

  return {
    buttonClicked,
    setButtonClicked,
    onButtonClick,
    onLinkClick,
    onLogoClick,
    isExpanded,
    setIsExpanded,
    showAbout,
    setShowAbout,
    aboutPageRender,
  };
};

export const SharedContextProvider: React.FC<SharedContextProviderProps> = ({
  children,
}) => {
  const contextValue = useButtonState();

  return (
    <SharedContext.Provider value={contextValue}>
      {children}
    </SharedContext.Provider>
  );
};
