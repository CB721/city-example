import { SearchResult } from "@/app/data/searchResults";

export interface SearchResultsProps {
  results: SearchResult[];
}

function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
      {results.map((result) => (
        <div key={result.title} className="">
          <h2 className="">{result.title.trim()} | Cloud City</h2>
          <p className="">{result.description.trim()}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;