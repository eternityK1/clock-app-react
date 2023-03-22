import { BrowserRouter } from 'react-router-dom';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import DisplayMenu from './component/Menu/DisplayMenu/DisplayMenu';
import BottomMenu from './component/Menu/BottomMenu/BottomMenu';
import Content from './component/Content/Content';

import cl from './App.module.css';

function App() {
  const handleFullScreen = useFullScreenHandle();

  return (
    <BrowserRouter>
      <FullScreen handle={handleFullScreen} className={cl.fullScreen}>
        <DisplayMenu handleFullScreen={handleFullScreen} />
        <BottomMenu handleFullScreen={handleFullScreen} />
        <Content handleFullScreen={handleFullScreen} />
      </FullScreen>
    </BrowserRouter>
  );
}

export default App;
