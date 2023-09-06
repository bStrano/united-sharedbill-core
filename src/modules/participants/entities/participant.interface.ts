import {TransactionInterface} from "../../transactions/entities/transaction.interface";
import {TransactionDebtorInterface} from "../../transaction-debtors/entities/transaction-debtor.interface";

export interface ParticipantInterface {
    id: string;
    name: string;
    email: string;
    userId: string;
    groupId: string;
    transactionCreatedByMe?: TransactionInterface[];
    transactionsOwnedByMe?: TransactionInterface[];
    transactionDebtor?: TransactionDebtorInterface[];
}
