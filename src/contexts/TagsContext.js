import { createContext, useContext, useMemo, useState } from 'react';

import { useTags } from '../features/tags/hooks/useTags';

const TagsContext = createContext();

function TagsProvider({ children }) {
  const [tagsPerPage, setTagsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const { isLoadingTags, isErrorTags, tags, tagsError } = useTags();

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

  const currentTags = sortedTags?.slice(
    page * tagsPerPage,
    page * tagsPerPage + tagsPerPage
  );

  const handleChangePage = (_event, newPage) => setPage(newPage);

  const handleChangeTagsPerPage = event => {
    setTagsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  return (
    <TagsContext.Provider
      value={{
        tags,
        tagsPerPage,
        sortField,
        sortDirection,
        page,
        currentTags,
        isLoadingTags,
        isErrorTags,
        tagsError,
        setSortField,
        setSortDirection,
        handleChangeTagsPerPage,
        handleChangePage,
      }}
    >
      {children}
    </TagsContext.Provider>
  );
}

function useTagsContext() {
  const context = useContext(TagsContext);
  if (context === undefined) {
    throw new Error('TagsContext was used outside of TagsProvider');
  }
  return context;
}

export { TagsContext, TagsProvider, useTagsContext };
