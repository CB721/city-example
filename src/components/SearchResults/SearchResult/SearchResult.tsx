export interface SearchResultProps {
  title: string;
  description: string;
}

function SearchResult({ title, description }: SearchResultProps) {
  return (
    <div className="rounded w-full h-auto border border-gray-600 mb-3 py-2 px-4 cursor-pointer">
      <h2 className="text-lg text-tertiary truncate underline capitalize">{title.trim()} | Cloud City</h2>
      <p className="text-base text-secondary truncate">{description.trim()}</p>
    </div>
  );
}

export default SearchResult;