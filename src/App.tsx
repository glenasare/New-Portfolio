import ComponentRouter from "./ComponentRouter";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ComponentRouter />
      </div>
      </QueryClientProvider>
   
  );
}

export default App;
