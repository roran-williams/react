
import './App.css';
import Header from './components/header'
import Footer from './components/footer'

export default function App(props) {
  return (
    <div>

    <Header title="hello world"/>
      <p>
        {props.message}
      </p>

    <Footer copyright="@2024"/>


    </div>
    
  );
}


