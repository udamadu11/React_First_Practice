import React from 'react';
import './App.css';
import Book from './Component/book';

function App() {
  return (
    <div>
      <div>
        <Book contact = {{name:"The Adventures of Sherlock Holmes",
        author:"Sir Arthur Conan Doyle",
        imgurl: require("./Img/330px-Adventures_of_sherlock_holmes.jpg"),
        date: "1891–1892",
        publish:"The Strand"}}/>

        <Book contact = {{name:"The Return of Sherlock Holmes",
        author:"Sir Arthur Conan Doyle",
        imgurl: require("./Img/CD257690.jpg"),
        date: "1903–1904",
        publish:"The Strand"}}/>
 
        <Book contact = {{name:"The Memoirs of Sherlock Holmes",
        author:"Sir Arthur Conan Doyle",
        imgurl: require("./Img/9781787051867_p0_v2_s550x406.jpg"),
        date: "1892–1893",
        publish:"The Strand"}}/>
        
      </div>
      

    </div>
  );
}

export default App;
