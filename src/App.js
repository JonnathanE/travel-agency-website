import tw from 'twin.macro';
import { Footer } from './components/Footer';
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
      <Footer />
    </AppContainer>
  );
}

export default App;
