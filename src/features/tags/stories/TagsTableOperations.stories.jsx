import TagsTableOperations from '../components/TagsTableOperations';
import MockTagsProvider from './MockTagsProvider';

export default {
  title: 'Features/Tags/TagsTableOperations',
  component: TagsTableOperations,
};

const Template = args => (
  <MockTagsProvider
    value={{
      ...args,
      tags: [],
      handleChangeTagsPerPage: () => {},
      setSortField: () => {},
      setSortDirection: () => {},
    }}
  >
    <TagsTableOperations />
  </MockTagsProvider>
);

export const Default = Template.bind({});
Default.args = {
  tagsPerPage: 5,
  sortField: 'name',
  sortDirection: 'asc',
};
Default.argTypes = {
  tagsPerPage: {
    control: 'number',
    description: 'Number of tags per page',
  },
  sortField: {
    control: 'select',
    options: ['name', 'count'],
    description: 'Field to sort by',
  },
  sortDirection: {
    control: 'select',
    options: ['asc', 'desc'],
    description: 'Sort direction',
  },
};
