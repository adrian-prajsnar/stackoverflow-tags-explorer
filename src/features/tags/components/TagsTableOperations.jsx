import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

import { useTagsContext } from '../../../contexts/TagsContext';

function TagsTableOperations() {
  const {
    tagsPerPage,
    handleChangeTagsPerPage,
    sortField,
    setSortField,
    sortDirection,
    setSortDirection,
  } = useTagsContext();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '0.8rem',
        flexWrap: 'wrap',
        width: '100%',
      }}
    >
      <TextField
        label='Tags per page'
        type='number'
        size='small'
        value={tagsPerPage || ''}
        onChange={handleChangeTagsPerPage}
        InputProps={{ inputProps: { min: 1 } }}
        sx={{ maxWidth: '105px' }}
      />

      <Box sx={{ display: 'flex', gap: '0.4rem' }}>
        <FormControl size='small'>
          <InputLabel id='sort-field-label'>Sort Field</InputLabel>
          <Select
            labelId='sort-field-label'
            id='sort-field'
            value={sortField}
            label='Sort Field'
            onChange={e => setSortField(e.target.value)}
          >
            <MenuItem value='name'>Name</MenuItem>
            <MenuItem value='count'>Count</MenuItem>
          </Select>
        </FormControl>

        <FormControl size='small'>
          <InputLabel id='sort-direction-label'>Sort Direction</InputLabel>
          <Select
            labelId='sort-direction-label'
            id='sort-direction'
            value={sortDirection}
            label='Sort Direction'
            onChange={e => setSortDirection(e.target.value)}
          >
            <MenuItem value='asc'>Ascending</MenuItem>
            <MenuItem value='desc'>Descending</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}

export default TagsTableOperations;
