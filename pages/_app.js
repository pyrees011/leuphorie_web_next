import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserProvider } from '../contexts/UserContext';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <Component {...pageProps} />
          <Toaster />
        </UserProvider>
      </QueryClientProvider>
    </Provider>
  );
}
