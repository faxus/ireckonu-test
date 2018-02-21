import { Moment } from "moment";

export type StatusType = "going" | "ignore" | "none";
export type DateGroup = "past" | "today" | "tomorrow" | "next-week" | "next-month";

export interface EventItem {
	id: string;
	title: string;
	description: string;
	date: Moment;
	imageUrl: string;
	status: StatusType;
	members: Member[];
}

export interface Member {
	id: string;
	imageUrl: string;
}
