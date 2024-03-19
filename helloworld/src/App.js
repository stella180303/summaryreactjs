
import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello';
import Welcome from './Components/Welcome';
import { Component, Fragment, PureComponent } from 'react';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import NameListKey from './Components/NameListKey';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import styles from './appStyles.module.css'
import './appStyles.css';
import Form from './Components/Form';
import LifecycleA from './Components/LifecycleA';
import LifecycleB from './Components/LifecycleB';
import Fragmentdemo from './Components/Fragmentdemo';
import Table from './Components/Table';
import Purecomponent from './Components/Purecomponent';
import ParentComp from './Components/ParentComp';
import RefsDemo from './Components/RefsDemo';
import Focusinput from './Components/Focusinput';
import FRParentInput from './Components/FRParentInput';
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import ClickCounterTwo from './Components/ClickCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
import User from './Components/User';
import CounterHandler from './Components/CounterHandler';
import ComponentC from './Components/ComponentC';
import { UserProvider } from './Components/UserContext';

function App() {
  return (
    <div className="App">
    
    <UserProvider value="Stella">
      <ComponentC />
    </UserProvider>
    
     {/* 

    Render Props :
    <CounterHandler 
    render={(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount} />} 
    />

    <CounterHandler 
    render={(count, incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount} />} 
    />

    <ClickCounterTwo />
    <HoverCounterTwo />
    <User render= {(isLoggedIn) => isLoggedIn ? 'Stella' : 'Guest'} />

    Higher Order Components : 
    -<HoverCounter />
    - <ClickCounter name='Stella'  />

    Error Boundary :
    <ErrorBoundary>
     <Hero heroName="Batman" />
    </ErrorBoundary>

    <ErrorBoundary>
      <Hero heroName="Superman" />
    </ErrorBoundary>
    
    <ErrorBoundary>
      <Hero heroName="Joker" />
    </ErrorBoundary>


    Portal : <PortalDemo />

    Forwarding Ref : <FRParentInput />

    Refs (Class component) :<Focusinput />

    Refs (functional component) : <RefsDemo />

    React Memo : <ParentComp />

    React Fragment :
    <Fragmentdemo />
    <Table />

    Lifecycle Methods :
     *ParentComponent*
    <LifecycleA />
    
    *Child component*
    <LifecycleB />

    Basic form handling : <Form />

    Styling and css basics :
    - <Stylesheet primary={true} />
    - <Inline />

     // stylesheet biasa
    <h1 className='error'>
      Error
    </h1>

    // Stylesheet module
    <h1 className={styles.success}>
      Successss
    </h1>

    KeyProps at list rendering : <NameListKey />
    List Rendering : <NameList />
    Conditional Rendering : <UserGreeting />
    
    Methods as props : <ParentComponent />
    
    Binding Event Handler : <EventBind />
    
    Event Handling : 
      - <FunctionClick />
      - <ClassClick />
    
    setState : <Counter />
    
    <h1>State</h1>
    
    <Message /> 
     functional component
      <Welcome  />
      <Hello  name = "Bruce" heroname="guru">
        <p>
          This is children props
        </p>
      </Hello>
      
      <Hello  name = "Lala" heroname="polisi">
        <button>Action</button>
      </Hello>

    class component
      <Welcome  name = "Diana" heroname="suster" />
      <Welcome  name = "sicantik" heroname="suster" /> */
    

  }
      </div> 
 );
}

export default App;
