import Tags from '../../../pages/Tags';
import MockTagsProvider from './MockTagsProvider';

export default {
  title: 'Pages/Tags',
  component: Tags,
};

const Template = args => (
  <MockTagsProvider
    value={{
      ...args,
      handleChangePage: () => {},
      handleChangeTagsPerPage: () => {},
      setSortField: () => {},
      setSortDirection: () => {},
    }}
  >
    <Tags />
  </MockTagsProvider>
);

export const Default = Template.bind({});
Default.args = {
  tags: Array(100)
    .fill()
    .map((_, index) => ({ name: `Tag ${index + 1}`, count: index * 3 })),
  tagsPerPage: 5,
  page: 0,
  sortField: 'name',
  sortDirection: 'asc',
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

export const Live = () => <Tags />;
