import React, { useContext, useState } from "react";

const CardContext = React.createContext();

export const useCard = () => useContext(CardContext);

export const CardProvider = ({ children }) => {
  const [cardMap, setCardMap] = useState(false);
  const toggle = () => setCardMap((prev) => !prev);

  return (
    <CardContext.Provider value={{ visible: cardMap, toggle }}>
      {children}
    </CardContext.Provider>
  );
};
