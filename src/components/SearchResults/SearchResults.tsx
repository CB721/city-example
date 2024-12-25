import { SearchResult } from "@/app/data/searchResults";
import Container from '@mui/material/Container';
import Search from "../Search/Search";
import SearchResultUI from "./SearchResult/SearchResult";

export interface SearchResultsProps {
  results: SearchResult[];
}

function SearchResults({ results }: SearchResultsProps) {
  return (
    <Container maxWidth="xl" className="bg-primary">
      <div className="p-4 min-h-[50vh]">
        <h1 className="text-xl font-extrabold">Search Results</h1>
        <div className="my-4">
          <Search autoFocus fullOpacity />
        </div>
        {results.length === 0 && <p className="">No results found</p>}
        {results.map((result) => (
          <SearchResultUI
            key={result.title}
            title={result.title}
            description={result.description}
          />
        ))}
      </div>
    </Container>
  );
}

export default SearchResults;