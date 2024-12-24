import { Input } from '@mui/joy';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export interface SearchProps {
  placeholder?: string;
}

function Search({placeholder }: SearchProps) {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className='relative'>
      <Input
        placeholder={placeholder || "Search your city"}
        variant="soft"
        endDecorator={<SearchIcon />}
        onFocus={() => setIsSearching(true)}
        onBlur={() => setIsSearching(false)}
        className={isSearching ? 'opacity-100' : 'opacity-85'}
        sx={{ backgroundColor: "var(--primary)", outline: "var(--tertiary)", height: '48px', width: '300px', borderRadius: '0' }}
      />
    </div>
  );
}

export default Search;