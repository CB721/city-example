'use client'

import { createContext, ReactNode, useCallback, useContext, useState } from "react";

export interface SearchContextType {
  value: string | null;
  onInputChange: (value: string) => void;
  resultsReady: boolean;
}

export const SearchContext = createContext<SearchContextType>(null!);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState<string | null>(null);

  const onInputChange = useCallback((val?: string) => {
    setValue(val ? val : null);
  }, []);

  const providerValue = {
    value,
    onInputChange,
    resultsReady: value ? value?.length > 3 : false,
  }

  return (
    <SearchContext.Provider
      value={providerValue}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}