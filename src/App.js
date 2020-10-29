import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import store from './store';
import _ from 'lodash';
function App() {
  const contact = store.getState().contact.contacts;
  const {user,activeUserId} = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.values(contact)}></Sidebar>
      <Main user={user} activeUserId={activeUserId}></Main>
    </div>
  );
}

export default App;
