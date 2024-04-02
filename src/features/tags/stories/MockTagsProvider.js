import { useMemo } from 'react';

import { TagsContext } from '../../../contexts/TagsContext';

function MockTagsProvider({ children, value }) {
  const { tags, sortField, sortDirection, tagsPerPage, page } = value;

  const sortedTags = useMemo(() => {
    return tags
      ? [...tags].sort((a, b) => {
          const isAsc = sortDirection === 'asc';
          if (sortField === 'count') {
            return isAsc ? a.count - b.count : b.count - a.count;
          }
          return isAsc
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        })
      : [];
  }, [tags, sortField, sortDirection]);
  value.sortedTags = sortedTags;

  const currentTags = value.sortedTags?.slice(
    page * tagsPerPage,
    page * tagsPerPage + tagsPerPage
  );
  value.currentTags = currentTags;

  return <TagsContext.Provider value={value}>{children}</TagsContext.Provider>;
}

export default MockTagsProvider;
