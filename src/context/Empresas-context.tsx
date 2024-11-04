import { createContext, useEffect, useState } from "react";
import { getEmpresas } from "./../api/empresa";

export const EmpresasContext = createContext({
  recentEmpresas: [],
  refresh: () => {},
});

const EmpresasProvider = ({ children }) => {
  const [empresas, setEmpresas] = useState([])
  const [changes, setChanges] = useState(false);

  const toggleChanges = () => {
    setChanges(!changes);
  };

  useEffect(() => {
    const loadEmpresas = async () => {
      const response = await getEmpresas();
      const items = [];
      
      Object.keys(response.data).forEach((key) => {
        items.push({ id: key, ...response.data[key] });
      })

      setEmpresas(items);
    };

    loadEmpresas();
  }, [changes]);
  
  const value = {
    recentEmpresas: empresas,
    refresh: toggleChanges,
  };

  return (
    <EmpresasContext.Provider value={value}>{children}</EmpresasContext.Provider>
  )
};

export default EmpresasProvider;