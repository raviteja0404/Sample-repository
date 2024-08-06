import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    constructor(){
        super()
        console.log('Parent constructor method is called');
    }

    connectedCallback(){
        console.log('Parent connected callback method is called');
    }

    renderedCallback(){
        console.log('Parent Rendered callback method is called');
    }

    name
    changeHandler(event){
    this.name=event.target.value;
    }

}