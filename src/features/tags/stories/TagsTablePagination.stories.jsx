import TagsTablePagination from '../components/TagsTablePagination';
import MockTagsProvider from './MockTagsProvider';

export default {
  title: 'Features/Tags/TagsTablePagination',
  component: TagsTablePagination,
};

const Template = args => (
  <MockTagsProvider
    value={{
      ...args,
      handleChangePage: () => {},
    }}
  >
    <TagsTablePagination />
  </MockTagsProvider>
);

export const Default = Template.bind({});
Default.args = {
  tagsPerPage: 5,
  tags: Array(100)
    .fill()
    .map((_, index) => ({ name: `Tag ${index + 1}`, count: index + 1 })), // Simulate 50 tags
  page: 0,
};
Default.argTypes = {
  tagsPerPage: {
    control: 'number',
    description: 'Number of tags displayed per page',
  },
  page: {
    control: 'number',
    description: 'Current page number',
  },
};
