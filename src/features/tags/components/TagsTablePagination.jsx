import { TablePagination } from '@mui/material';

import { useTagsContext } from '../../../contexts/TagsContext';

function TagsTablePagination() {
  const { tagsPerPage, tags, page, handleChangePage, handleChangeTagsPerPage } =
    useTagsContext();

  if (tagsPerPage) {
    return (
      <TablePagination
        component='footer'
        count={tags?.length || 0}
        rowsPerPage={tagsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeTagsPerPage}
        rowsPerPageOptions={[]}
      />
    );
  }
}

export default TagsTablePagination;
