import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './components/BookList';
import Header from './components/Header';
import Footer from './components/Footer';
import HeadingStrip from './components/HeadingStrip';
import { Container } from 'react-bootstrap';

function App() {

  const [book, setBook] = useState([])


  return (
    <div className="App">
      <Header/>
      
      <Container className="my-5 py-3" style={{backgroundColor: "#333"}}>
      <HeadingStrip/>
      <BookList />
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
