import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import { EventClient } from "./event.client";
import { EventItem } from "./event.model";
import { formatDate, getPeriod } from "./event.util";

@Injectable()
export class EventService {
	constructor(
		private client: EventClient
	) {

	}

	getEvents(): Observable<EventItem[]> {
		return this.client.getEvents().pipe(
			map(this.extractData)
		);
	}

	private extractData(res: any): EventItem[] {
		if (!res) return [];
		return res.map((row) => {
			return {
				id: row.id,
				title: row.title,
				description: row.description,
				date: formatDate(row.dateTime),
				period: getPeriod(row.dateTime),
				imageUrl: row.image,
				status: row.status,
				members: row.members
					.map(m => {
						return {
							id: m.id,
							imageUrl: m.photo
						}
					})
			}
		});
	}

}
