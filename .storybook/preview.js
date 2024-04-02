/** @type { import('@storybook/react').Preview } */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TagsProvider } from '../src/contexts/TagsContext';

const queryClient = new QueryClient();

export const decorators = [
  Story => (
    <QueryClientProvider client={queryClient}>
      <TagsProvider>
        <Story />
      </TagsProvider>
    </QueryClientProvider>
  ),
];

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
