import { ReactNode, createContext, useState } from "react";

interface ArticleContextProps {
  numberOfArticles: number;
  setNumberOfArticles: React.Dispatch<React.SetStateAction<number>>;
}

export const ArticleContext = createContext<ArticleContextProps>({
  numberOfArticles: 0,
  setNumberOfArticles: () => {},
});

export const ArticleProvider = ({ children }: { children: ReactNode }) => {
  const [numberOfArticles, setNumberOfArticles] = useState(0);

  return (
    <ArticleContext.Provider value={{ numberOfArticles, setNumberOfArticles }}>
      {children}
    </ArticleContext.Provider>
  );
};
