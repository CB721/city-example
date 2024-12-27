'use client'

import { SearchResult as Result } from "@/app/data/searchResults";
import { useRouter } from "next/navigation";

export interface SearchResultProps {
  result: Result;
  query: string;
}

function addEmphasis(phrase: string, query: string) {
  return phrase
    .split(" ")
    .map((word) => {
      if (query && query.toLowerCase().includes(word.toLowerCase())) {
        return `<span class="bg-yellow-300">${word}</span>`;
      }
      return word;
    })
    .join(" ");
}

function SearchResult({ result, query }: SearchResultProps) {
  const router = useRouter();

  return (
    <div 
    className="rounded w-full h-auto border border-gray-600 mb-3 py-2 px-4 cursor-pointer"
    onClick={() => {
      router.push(result.route);
    }}
    >
      <h2 
      className="text-lg text-tertiary truncate underline capitalize"  
      dangerouslySetInnerHTML={{
        __html: 
        `${addEmphasis(result.title, query).trim()} | Cloud City`
      }}
      />
      <p
        className="text-base text-secondary truncate"
        dangerouslySetInnerHTML={{
          __html: addEmphasis(result.description, query).trim()
        }} 
        />
    </div>
  );
}

export default SearchResult;