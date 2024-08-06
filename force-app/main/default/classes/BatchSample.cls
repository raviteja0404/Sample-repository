global class BatchSample implements Database.Batchable<SObject>{

    global Database.QueryLocator start(Database.BatchableContext bc){
        return Database.getQueryLocator([SELECT Id, Name from Account]);

    }
     global void execute(Database.BatchableContext bc, List<Account> AccountList){
  
        for(Account ac : AccountList){
            ac.AccountSource='web';
        }
        update AccountList;
     }

     global void finish(Database.BatchableContext bc){

       System.debug('Batch class executed');

     }
}