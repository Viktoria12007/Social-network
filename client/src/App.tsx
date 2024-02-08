import './App.css';
import {FetchPostListView} from "./components/PostListView";
import {Account} from "./components/Account/Account";

function App() {
  return <div className="app">
          <Account />
          <FetchPostListView />
         </div>;
}

export default App;
