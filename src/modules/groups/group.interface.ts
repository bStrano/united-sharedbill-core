import {ParticipantInterface} from "../participants/entities/participant.interface";

export interface GroupInterface {
    id: string;
    title: string;
    description: string;
    icon: string;
    ownerId: string;
    owner?: ParticipantInterface;
    participants?: ParticipantInterface[];
}
