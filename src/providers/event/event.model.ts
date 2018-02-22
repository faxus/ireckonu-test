import { Moment } from "moment";

export type StatusType = "going" | "ignore" | "none";

export type PeriodType = "today" | "thisweek" | "other";

export interface EventItem {
	id: string;
	title: string;
	description: string;
	date: Moment;
	period: PeriodType;
	imageUrl: string;
	status: StatusType;
	members: Member[];
}

export interface Member {
	id: string;
	imageUrl: string;
}
