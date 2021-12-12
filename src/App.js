import tw from 'twin.macro';
import './App.css';
import { ExploreSection } from './containers/ExploreSection';
import { TopSection } from './containers/TopSection';

const AppContainer = tw.div`
  w-full
  h-full
  flex
  flex-col
  overflow-hidden
`;

function App() {
  return (
    <AppContainer>
      <TopSection />
      <ExploreSection />
    </AppContainer>
  );
}

export default App;
