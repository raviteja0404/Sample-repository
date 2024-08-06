import { LightningElement } from 'lwc';

export default class LoopingComponent extends LightningElement {

    carList = ["Maruthi","KIA","Honda","Tata"]

    friendsList = [
        {id : 1,
        name: 'sankara',
        company: 'EPAM'},
        {id : 2,
        name: 'Sai',
        company: 'Infosys'},
        {id : 1,
        name: 'Bharath',
        company: 'Persistent'},
        {id : 1,
        name: 'Naveen',
        company: 'Make Positive'}
    ]
}