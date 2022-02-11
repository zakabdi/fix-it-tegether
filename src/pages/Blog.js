import React from 'react'



function Blog(props) {

//     contributors
// title
// writer
// pages
// id
     
 const  {title, contributors, writer, pages }=props.dataprops;



// console.log("contributors", props.dataprops.contributors);


const mydata = props.dataprops.map( books =>{
      return books.contributors; 
});

 

    return (




        <div>
            <h1>List of books</h1>

            { mydata.map( book =>(
                <ul key={book}> {book} </ul>

            ))
            
            }

        </div>




    )
}




export default Blog;
