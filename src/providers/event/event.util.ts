import * as moment from "moment";
import { Moment } from "moment";

export function formatDate(dateString: string): Moment {
	return moment(dateString, "DD-MM-YYYY HH:mm Z");
}

export function getPeriod(dateString: string): string {
	var moment = formatDate(dateString);
	const periods = {
		sameDay: "[today]",
		nextWeek: "[thisweek]",
		sameElse: "[other]"
	};
	return moment.calendar(null, periods);
}
