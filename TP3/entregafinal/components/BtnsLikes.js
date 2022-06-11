import {FaThumbsDown, FaThumbsUp} from 'react-icons/fa'
import { useState, useEffect } from "react";

export default function BtnsLikes(){

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);


  if (loading) {
    var btn1 = document.querySelector('#green');
    var btn2 = document.querySelector('#red');

    btn1.addEventListener('click', function() {
      if (btn2.style.color == 'red') {
        btn2.style.color = 'gray';
      } 
      (btn1.style.color == 'green') ? btn1.style.color == 'gray' :
      btn1.style.color = 'green';
    });

    btn2.addEventListener('click', function() {
      if (btn1.style.color == 'green') {
        btn1.style.color = 'gray';
      } 
      btn2.style.color = 'red';
      
    });
  }

  /* var btn1 = document.querySelector('#green');
  var btn2 = document.querySelector('#red');

  btn1.addEventListener('click', function() {
    if (btn2.classList.contains('red')) {
      btn2.classList.remove('red');
    } 
    this.classList.toggle('green');
    
  });

  btn2.addEventListener('click', function() {
    if (btn1.classList.contains('green')) {
      btn1.classList.remove('green');
    } 
    this.classList.toggle('red');
    
  }); */

  return (
    <>
      <button class="btn" id="green"><FaThumbsUp/></button>
      <button class="btn" id="red"><FaThumbsDown/></button>
      <script src="https://use.fontawesome.com/fe459689b4.js"></script>

      <style jsx>{`          
        button{
          cursor: pointer;
          outline: 0;
          color: gray;

        }

        .btn:focus {
          outline: none;
        }

        .green{
          color: green;
        }

        .red{
          color: red;
        }
      `}</style>
    </>
  )
}