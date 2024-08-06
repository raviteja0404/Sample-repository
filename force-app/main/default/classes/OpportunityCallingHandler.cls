public with sharing class OpportunityCallingHandler {
    
    // opp created or updated ... amount > 10000 send an email to opp owner 
        public static void emailSend(List<Opportunity> oppList) {
        Set<Id> ownerList = new Set<Id>();
        List<Messaging.SingleEmailMessage> emailsToSend = new List<Messaging.SingleEmailMessage>();

        if(!oppList.isEmpty()){
            for(Opportunity opp : oppList) {
                 if(opp.Amount != null && opp.Amount > 10000){
                    ownerList.add(opp.OwnerId);
                }
            }
        }
            if(!ownerList.isEmpty()){
                Map<Id, User> ownerMap = new Map<Id, User>([SELECT Id, Name FROM User WHERE ID IN : ownerList]);

                for(Opportunity newopp : oppList) {
                    Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
                    email.setToAddresses(new List<String> {newopp.OwnerId});
                   String ownerName = ownerMap.containsKey(newopp.OwnerId) ? ownerMap.get(newopp.OwnerId).Name : '';
                   email.setSubject('Opportunity amount exceeding threshold');
                   email.setPlainTextBody('Dear '+ownerName+ ',\n\n'+'The Opportunity '+newopp.Name+' has exceeded 100000 rupees');
                   emailsToSend.add(email);
                }
                }
                if(!emailsToSend.isEmpty()){
                    Messaging.sendEmail(emailsToSend);
                }            
        }
    }
