import { LightningElement, track } from 'lwc';
export default class HelloWord extends LightningElement {
      fullname = 'Zero to Hero'
      title = 'Aura'
      address={
        city: 'Srikakulam',
        state: 'Andhra Pradesh',
        country: 'India'
      }
    changeHandler(event){
        this.title= event.target.value
      }
    trackHandler(event){
        this.address= {...this.address, city: event.target.value}
      }
}