import './App.css';
import MainContent from './components/mainContent/MainContent.jsx'; 
import { QueryClient, QueryClientProvider} from 'react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MainContent />
      </QueryClientProvider>
    </>
  );
}

export default App;
