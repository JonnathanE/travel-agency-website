import tw from 'twin.macro';
import './App.css';
import { TopSection } from './containers/TopSection';

const AppContainer = tw.div`
  w-full
  h-full
  flex
`;

function App() {
  return (
    <AppContainer>
      <TopSection />
    </AppContainer>
  );
}

export default App;
