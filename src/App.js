import logo from './logo.svg';
import Language from './Language';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
    <h1>言語一覧</h1>
    <div className='language'>
      <Language
        name='HTML & CSS'
        image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
      />
      <Language
        name='JavaScript'
        image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg'
      />
      <Language
        name='React'
        image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg'
      />
    </div>
  </div>
  );
}

export default App;
