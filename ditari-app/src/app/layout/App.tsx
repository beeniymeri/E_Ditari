
import { Container } from 'semantic-ui-react';
import SideBar from './SideBar';
import BookDashboard from '../../features/Books/dashboard/BookDashboard';

import { observer } from 'mobx-react-lite';
import { Route } from 'react-router';
import Orari from '../../features/Orari/Orari';



function App() {

  const myStyle = {
    marginLeft: "7em",
    marginTop: "2em"
  };

  return (
    <>
      <Route exact path='/' component={Orari} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <SideBar />
            <Container style={myStyle}>
              <Route path='/books' component={BookDashboard} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);

