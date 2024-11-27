import {Component} from 'react';

class ClassComponentsTutorial extends Component{
    // Construct
    constructor(props){
        super(props);

        // state
        this.state={
            count:0
        }
        
        // binding
        this.countHandleClick = this.countHandleClick.bind(this);
        this.countMinusHandleClick = this.countMinusHandleClick.bind(this);
    } // end constructor

    //cdm

    // Event
    countHandleClick(){
        this.setState({             //count un durumunu değiştirecek
            count:this.state.count+1
        });
    } //end Event

    countMinusHandleClick(){
        this.setState({
            count:this.state.count-1
        });
    }

    // render
    render(){
        return(
            <div>
                <h1> Class Component</h1>
                <p> Count: {this.state.count} </p>
                <button className='btn btn-primary' onClick={this.countHandleClick}> Count Button </button>

                <button className='btn btn-danger ms-2' onClick={this.countMinusHandleClick}> Count Button </button>

            </div>
        )
    }

}


export default ClassComponentsTutorial;