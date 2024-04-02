import { useQuery } from '@tanstack/react-query';

import { getTags } from '../../../api/tags';

export function useTags() {
  const {
    isPending: isLoadingTags,
    isError: isErrorTags,
    data: tags,
    error: tagsError,
  } = useQuery({
    queryKey: ['tags'],
    queryFn: getTags,
  });

  return { isLoadingTags, isErrorTags, tags, tagsError };
}
