import { IconButton, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import { useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebounce'

type SearchFieldProps = {
  callback: (search: string) => void
  delay: number
}

export default function SearchField({ callback, delay }: SearchFieldProps) {
  const [search, setSearch] = useState<string>('')
  const debouncedSearchTerm = useDebounce(search, delay)

  useEffect(() => {
    callback(debouncedSearchTerm)
  }, [debouncedSearchTerm])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <TextField
      label="Search"
      id="outlined-search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: search && (
          <IconButton onClick={() => setSearch('')}>
            <ClearIcon />
          </IconButton>
        )
      }}
      value={search}
      onChange={handleChange}
    />
  )
}
