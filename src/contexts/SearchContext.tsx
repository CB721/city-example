'use client'

import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { retrieveSearchResults, SearchResult } from "@/app/data/searchResults";
export interface SearchContextType {
  value: string | null;
  onInputChange: (value: string) => void;
  results: SearchResult[];
  resultsReady: boolean;
}

export const SearchContext = createContext<SearchContextType>(null!);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState<string | null>(null);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [cachedResults, setCachedResults] = useState<{ [key: string]: SearchResult[] }>({});
  const [resultsReady, setResultsReady] = useState(false);

  const onInputChange = useCallback((val?: string) => {
    setValue(val ? val : null);
  }, []);

  useEffect(() => {
    if (value && value.length > 3) {
      const searchVal = value.toLowerCase();
      if (cachedResults[searchVal]) {
        setResults(cachedResults[searchVal]);
      } else {
        const searchResults = retrieveSearchResults(searchVal)
        setResults(searchResults);
        setCachedResults({ ...cachedResults, [searchVal]: searchResults });
      }
      setResultsReady(true);
    } else {
      setResultsReady(false);
      setResults([]);
    }
  }, [cachedResults, value]);

  const providerValue = {
    value,
    onInputChange,
    results,
    resultsReady,
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