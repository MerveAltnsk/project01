import {useState} from 'react';

function FunctionComponentsTutorial(props){
    
    // state
    const [count, setCount] = useState(0)


    //cdm

    // Event
    const countPlusHandleClick = () => {
        setCount(count + 1)
    } //end Event

    const countMinusHandleClick = () => {
        setCount(count - 1)
    }

  
  
        return(
            <div>
                <h1> Function Component</h1>
                <p> Count: {count} </p>
                <button className='btn btn-primary' onClick={countPlusHandleClick}> Count Button </button>

                <button className='btn btn-danger ms-2' onClick={countMinusHandleClick}> Count Button </button>

            </div>
        )
     

}


export default FunctionComponentsTutorial;