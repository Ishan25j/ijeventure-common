export enum Subjects {
    TicketCreated = 'ticket:created',
    TicketUpdated = 'ticket:updated',

    OrderCreated = 'order:created',
    OrderCancelled = 'order:cancelled',

    ExpirationComplete = 'expiration:complete',

    PaymentCreated = 'payment:created'
} 

/* 
? So how we use enum??
* So enum will allow us to define any type defined in that enum Object

* Example:

* const printSubject = (subject: Subject) => {};

* printSubject('Ticket:created') // * it throw error

* Instead use 

* printSubject(Subject.TicketCreated);

*/

