import { TransactionTimelineContent } from './transaction-timeline-content';

export interface TransactionTimelineSection {
  key: string;
  month: string;
  year: string;
  data: TransactionTimelineContent[];
}
