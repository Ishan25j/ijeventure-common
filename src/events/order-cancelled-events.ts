import { Subjects } from "./subjects";


export interface OrderCancelledEvent {
    source?: 'sell';
    subject: Subjects.OrderCancelled;
    data: {
        id: string;
        version: number;
        event: {
            id: string;
        };
    };
}