import { LightningElement } from 'lwc';

export default class HelloConditonalStatements extends LightningElement {
    name
    isVisible=false;
    handleClick(event){
        this.isVisible= true;
    }
    changeHandler(event){
        this.name = event.target.value;
    }
    get hellomethod(){
        return this.name === 'hello'
    }   
}