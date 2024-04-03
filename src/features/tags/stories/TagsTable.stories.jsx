import TagsTable from '../components/TagsTable';
import MockTagsProvider from './MockTagsProvider';

export default {
  title: 'Features/Tags/TagsTable',
  component: TagsTable,
};

export const Default = args => (
  <MockTagsProvider
    value={{ ...args, tagsError: new window.Error(args.tagsError) }}
  >
    <TagsTable />
  </MockTagsProvider>
);
Default.args = {
  tags: [
    { name: 'react', count: 100 },
    { name: 'javascript', count: 200 },
    { name: 'css', count: 150 },
    { name: 'material', count: 125 },
    { name: 'storybook', count: 75 },
  ],
  tagsPerPage: 5,
  page: 0,
  isLoadingTags: false,
  isErrorTags: false,
  tagsError: 'An error occurred while fetching tags.',
};

export const Loading = args => (
  <MockTagsProvider
    value={{
      ...args,
      tags: [{ name: 'xyz', count: null }],
    }}
  >
    <TagsTable />
  </MockTagsProvider>
);
Loading.args = {
  isLoadingTags: true,
};

export const Error = args => (
  <MockTagsProvider
    value={{
      ...args,
      tags: [{ name: 'xyz', count: null }],
      tagsError: new window.Error(args.tagsError),
    }}
  >
    <TagsTable />
  </MockTagsProvider>
);
Error.args = {
  isErrorTags: true,
  tagsError: 'An error occurred while fetching tags.',
};

export const Empty = args => (
  <MockTagsProvider
    value={{ ...args, tagsError: new window.Error(args.tagsError) }}
  >
    <TagsTable />
  </MockTagsProvider>
);
Empty.args = {
  tags: [],
  tagsPerPage: 5,
  page: 0,
  isLoadingTags: false,
  isErrorTags: false,
  tagsError: 'An error occurred while fetching tags.',
};
