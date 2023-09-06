import {ParticipantInterface} from "../../participants/entities/participant.interface";

export interface TransactionDebtorInterface {
    id: string;
    participantId: string;
    participant: ParticipantInterface;
    total: number;
}
