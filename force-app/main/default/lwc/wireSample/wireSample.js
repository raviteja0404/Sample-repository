import { LightningElement, wire, api } from 'lwc';
import getContacts from '@salesforce/apex/ContactsDetails.getContacts';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'

export default class WireSample extends LightningElement {
    @api sample

    @wire(getPicklistValues, {recordTypeId: '0018s00000WANttAAH', fieldApiName: INDUSTRY_FIELD})
    getdata({data,error}){
        console.log('data is '+data);
        if(data){
            this.sample = data;
            console.log('Inside the loop '+this.sample );
        }
        else{
            console.log('error occured');
        }
    }
    
    }
    

    // constructor() {
    //     super();
    //     console.log('template details in Constructor'+this.template.querySelector('lightning-button'));
    // }
    // connectedCallback(){
    //     console.log('template details in connectedcallback '+this.template.querySelector('lightning-button'));
    // }

    // @wire(getContacts) 
    // contacts({data,error}){
    //     if(data){
    //         console.log('list of contacts are '+ JSON.stringify(data));
    //     }
    //     else{
    //         console.log('error details '+ JSON.stringify(error));
    //     }
        
    // }
    
