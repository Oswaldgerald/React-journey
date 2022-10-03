import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      {/* <Inline/> */}
      {/* <Stylesheet primary = {false}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <ClassClick/>  */}
      {/* <EventBind/> */}
      {/* <FunctionClick/> */}
      {/* <Counter/>
      <Message></Message> */}
    {/* <Greet name='Jane' heroName = 'Batman'>
      <p>This is my first children element</p>
    </Greet>
    <Greet name='Meryy'heroName = 'Spider'>
      <button>Action</button>
    </Greet> */}
    {/* <Greet name='Lane' heroName = 'Antman'/> */}
    {/* <Welcome name='Jane' heroName = 'Batman'></Welcome>
    <Welcome name='Meryy'heroName = 'Spider'></Welcome>
     <Welcome name='Lane' heroName = 'Antman'></Welcome> */}
    </div>
  )
}

export default App;
