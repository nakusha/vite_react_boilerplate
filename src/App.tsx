import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StoreTest from "./StoreText";
import { CookiesProvider } from "react-cookie";

function App() {
  const queryClient = new QueryClient();

  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <StoreTest />
      </QueryClientProvider>
    </CookiesProvider>
  );
}

export default App;
