import React from "react";

const Hello = () => {
    // return(
    //     <div>
    //       <h1>Hello Oswald Moshi</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
         {id:'Hello', className:'dummyClass'},
         React.createElement('h1', null, 'Hello Team'))
}

export default Hello;
