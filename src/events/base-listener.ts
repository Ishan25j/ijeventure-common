import { Message, Stan } from "node-nats-streaming";
import { Subjects } from "./subjects";


interface Event {
    subject: Subjects;
    data: any;
}


export abstract class Listener<T extends Event> {

    abstract subject: T['subject'];
    abstract queueGroupName: string;
    abstract onMessage(data: T['data'], msg: Message): void;

    protected client: Stan;
    protected ackWait = 5 * 1000;

    constructor(client: Stan) {
        this.client = client;
    }

    /*
    * - options which are chained and added to the 3rd argument in stan.subscribe method
    * - setManualAckMode will listen for success process if error occur then it will 
    *   acknowledge and will send data again
    * - setDeliverAllAvailable will return all the event occur till now as an event
    * - setDurableName make sure of event that has been process are not send again when
    *   the service went down and restart and only sends the events which are missed
    */
    subscriptionOptions() {
        return this.client
            .subscriptionOptions()
            .setDeliverAllAvailable()
            .setManualAckMode(true)
            .setAckWait(this.ackWait)
            .setDurableName(this.queueGroupName);
    }

    listen() {
        // * adding subscription and also adding queue groups two prevent multiple data retrivals
        const subscription = this.client.subscribe(
            this.subject,
            this.queueGroupName,
            this.subscriptionOptions()
        );

        subscription.on('message', (msg: Message) => {
            console.log(
                `Message received: ${this.subject} / ${this.queueGroupName}`
            )

            const parseData = this.parseMessage(msg);
            this.onMessage(parseData, msg);
        });

    }

    parseMessage(msg: Message) {
        const data = msg.getData();

        return typeof data === 'string'
            ? JSON.parse(data)
            : JSON.parse(data.toString('utf8'));
    }
}
