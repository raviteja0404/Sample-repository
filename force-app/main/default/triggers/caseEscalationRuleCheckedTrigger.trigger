trigger caseEscalationRuleCheckedTrigger on Case (after insert, after update) {

    List<Id> accountList = new List<Id>();
    List<Task> TaskList = new List<Task>();
   
    for(Case c : Trigger.new){
        
        if(c.IsEscalated && c.IsEscalated != Trigger.oldMap.get(c.Id).IsEscalated){
            accountList.add(c.AccountId);
        }

    }

    for(Contact con : [ Select Id, Name FROM Contact WHERE AccountId IN :accountList]){
        //Select Id, Name FROM Contact WHERE AccountId IN :accountList AND Primary__c = true
    Task t = new Task();
     t.Subject = con.Name;
     t.WhatId = con.Id;
     TaskList.add(t);
    }

    if(TaskList.size()>0){
        Database.insert(TaskList, false);
    }

}