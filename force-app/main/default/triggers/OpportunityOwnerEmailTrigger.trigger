trigger OpportunityOwnerEmailTrigger on Opportunity (after insert, after update) {

    if(trigger.isAfter && (trigger.isInsert || trigger.isUpdate)){

        OpportunityCallingHandler.emailSend(trigger.new);
    }

}