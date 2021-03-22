import react from 'react';

class Cat extends react.Component{
    constructor(props){
        super(props);
        this.state={
            instituteName : "AchiversIt"
        }
    }
    render(){

        return (
            <div>
            <h6>{ this.state.instituteName}</h6>
            </div>
         );    
        }
}
export default Cat;