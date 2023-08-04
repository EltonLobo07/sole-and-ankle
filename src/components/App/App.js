import React from 'react';
import styled from 'styled-components/macro';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <Header
        zIndex = {1}
      />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const HeaderWrapper = styled.div`
  z-index: 1;
`;

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
