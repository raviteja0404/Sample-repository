public with sharing class ContactsDetails {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        try {
            return [SELECT Id, AccountId, Name, FirstName, LeadSource FROM Contact WHERE LeadSource = 'Trade Show'];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}