import type { NextPage } from 'next';
import Nasa from '../components/icons/Nasa';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-deepspace-600">
      <Nasa />
    </div>
  );
};

export default Home;
