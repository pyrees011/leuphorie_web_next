import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserProvider } from '../contexts/UserContext';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </QueryClientProvider>
    </Provider>
  );
}
