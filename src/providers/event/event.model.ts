import { Moment } from "moment";

export type StatusType = "going" | "ignore" | "none";
export type DateGroup = "past" | "today" | "tomorrow" | "next-week" | "next-month";

export interface Event {
	id: number;
	title: string;
	description: string;
	date: Moment;
	imageUrl: string;
	status: StatusType;
	memebers: Member[];
}

export interface Member {
	id: number;
	imageUrl: string;
}
