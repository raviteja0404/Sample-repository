import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super()
        console.log('Child constructor method is called');
    }

    connectedCallback(){
        console.log('Child connected callback method is called');
    }

    renderedCallback(){
        console.log('Child Rendered callback method is called');
    }
}