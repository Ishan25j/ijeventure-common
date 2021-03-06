import { Subjects } from "./subjects";

export interface EventCreatedEvent {
    subject: Subjects.EventCreated;

    data: {
        id: string;
        name: string;
        creatorId: string;
        date: string;
        ticketLeft: number;
        price: number;
        version: number;
    }
}