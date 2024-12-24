'use client'

import { Input } from '@mui/joy';
import SearchIcon from '@mui/icons-material/Search';
import { useState, ChangeEvent } from 'react';
import { useSearch } from '@/contexts/SearchContext';

export interface SearchProps {
  placeholder?: string;
}

function Search({ placeholder }: SearchProps) {
  const [isSearching, setIsSearching] = useState(false);

  const { value, onInputChange } = useSearch();

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
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onInputChange(event.target.value);
        }}
        value={value || ''}
      />
    </div>
  );
}

export default Search;