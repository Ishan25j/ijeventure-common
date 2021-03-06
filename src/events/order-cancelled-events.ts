import { Subjects } from "./subjects";


export interface OrderCancelledEvent {
    subject: Subjects.OrderCancelled;
    data: {
        source?: 'sell';
        id: string;
        version: number;
        event: {
            id: string;
        };
    };
}