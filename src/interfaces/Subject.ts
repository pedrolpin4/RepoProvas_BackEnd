import { DBPeriod } from './Period';

export interface DBSubject {
    id: number;
    name: string;
    period: DBPeriod;
}
