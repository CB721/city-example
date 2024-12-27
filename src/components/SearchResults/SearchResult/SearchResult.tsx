export interface SearchResultProps {
  title: string;
  description: string;
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

function SearchResult({ title, description, query }: SearchResultProps) {
  return (
    <div className="rounded w-full h-auto border border-gray-600 mb-3 py-2 px-4 cursor-pointer">
      <h2 
      className="text-lg text-tertiary truncate underline capitalize"  
      dangerouslySetInnerHTML={{
        __html: 
        `${addEmphasis(title, query).trim()} | Cloud City`
      }}
      />
      <p
        className="text-base text-secondary truncate"
        dangerouslySetInnerHTML={{
          __html: addEmphasis(description, query).trim()
        }} 
        />
    </div>
  );
}

export default SearchResult;