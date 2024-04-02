import { Container } from '@mui/material';

import TagsTableOperations from '../features/tags/components/TagsTableOperations';
import TagsTable from '../features/tags/components/TagsTable';
import TagsTablePagination from '../features/tags/components/TagsTablePagination';

function Tags() {
  return (
    <Container
      component='main'
      maxWidth='sm'
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '0.8rem',
        padding: '1.2rem',
        minHeight: '100vh',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>StackOverflow Tags</h1>
      <TagsTableOperations />
      <TagsTable />
      <TagsTablePagination />
    </Container>
  );
}

export default Tags;
