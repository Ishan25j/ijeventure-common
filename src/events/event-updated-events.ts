import { Subjects } from "./subjects";

export interface EventUpdatedEvent {
    subject: Subjects.EventUpdated;

    data: {
        id: string;
        creatorId: string;
        date: string;
        ticketLeft: number;
        price: number;
        version: number;
    }
}