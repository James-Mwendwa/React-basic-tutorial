import React from 'react';


const Book = (props) => {
    const clickHandler = () => {
        alert ('you clicked');
    }
  
    /* props destructuring */
    const { img, Title, Author } = props;

    
    return (
    <article className="book"
     onMouseOver={() =>{
        console.log(Title);
    }}>
     <img src= {img} alt="" />
      <h3> {Title} </h3>
      <h4> {Author} </h4>
    <button type="button" onClick={clickHandler} >Reference</button>
    

    </article>
    );
};

export default Book