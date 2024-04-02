import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { TagsProvider } from './contexts/TagsContext';

import Tags from './pages/Tags';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <TagsProvider>
        <Tags />
      </TagsProvider>
    </QueryClientProvider>
  );
}

export default App;
