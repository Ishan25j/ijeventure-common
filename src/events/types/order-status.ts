/*
* enum OrderStatus:
* - Created:
*       When the order has been created, but the ticket it is trying to order has not been reserved
* - Cancelled:
*       The ticket ths order is trying to reserve has already been reserved, 
*       or when the user has cancelled the order,
*       or the order expires before payment
* - AwaitingPayment:
*       The order has successfully reserved the ticket and waiting for payment
* - Complete:
*       The order has reserved the ticket and the user has provided the payment successfully
*/

export enum OrderStatus {

    Created = 'created',
    Cancelled = 'cancelled',
    AwaitingPayment = 'awaiting:payment',
    Complete = 'complete'
}