import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Box,
  Alert,
  CircularProgress,
} from '@mui/material';

import { useTagsContext } from '../../../contexts/TagsContext';

function TagsTable() {
  const { isLoadingTags, isErrorTags, tagsError, tags, currentTags } =
    useTagsContext();

  return (
    <TableContainer
      component={Paper}
      elevation={2}
      sx={{ maxHeight: '70vh', overflow: 'auto' }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align='right'>
              Count
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {isErrorTags && (
            <TableRow>
              <TableCell colSpan='100%' align='center'>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  <Alert severity='error' align='center'>
                    {tagsError?.message} Please try again later.
                  </Alert>
                </Box>
              </TableCell>
            </TableRow>
          )}

          {isLoadingTags && (
            <TableRow>
              <TableCell colSpan='100%'>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CircularProgress />
                </Box>
              </TableCell>
            </TableRow>
          )}

          {tags?.length === 0 && (
            <TableRow>
              <TableCell align='center' colSpan='100%'>
                There are no tags to display.
              </TableCell>
            </TableRow>
          )}

          {currentTags?.map(tag => (
            <TableRow
              key={tag.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {tag.name}
              </TableCell>
              <TableCell align='right'>{tag.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TagsTable;
