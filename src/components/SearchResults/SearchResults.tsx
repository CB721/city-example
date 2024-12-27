'use client'

import { SearchResult } from "@/app/data/searchResults";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Search from "../Search/Search";
import SearchResultUI from "./SearchResult/SearchResult";
import { QTechAiResponse } from "@/services/ai";
import AiResponse from "../AI/AiResponse/AiResponse";
import { useEffect, useState } from "react";

export interface SearchResultsProps {
  results: SearchResult[];
  aiRes: QTechAiResponse | null;
  query: string;
}

function SearchResults({ results, aiRes, query }: SearchResultsProps) {
  const [numOfResults, setNumOfResults] = useState(5);

  useEffect(() => {
    const searchField = document.getElementById('searchField');
    searchField?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <Container maxWidth="xl" className="bg-primary">
      <div className="p-4 min-h-[50vh]">
        <h1 className="text-xl font-extrabold">Search Results</h1>
        <div className="my-4" id="searchField">
          <Search autoFocus fullOpacity />
        </div>
        {results.length === 0 && <p className="">No results found</p>}
        {aiRes && <AiResponse aiRes={aiRes} query={query} />}
        {results.slice(0, numOfResults).map((result) => (
          <SearchResultUI
            key={result.title}
            title={result.title}
            description={result.description}
            query={query}
          />
        ))}
        <p className="text-text text-base">Results: {numOfResults} of {results.length}</p>
        {results.length > numOfResults && (
          <ButtonGroup className="mt-4">
            <Button
              onClick={() => setNumOfResults(numOfResults + 5)}
              variant="contained"
              color="primary"
              sx={{ backgroundColor: 'var(--background)', color: 'var(--primary)' }}
            >
              Load More
            </Button>
          </ButtonGroup>
        )}
      </div>
    </Container>
  );
}

export default SearchResults;