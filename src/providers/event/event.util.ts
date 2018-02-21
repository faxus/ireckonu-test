import * as moment from "moment";
import { Moment } from "moment";

export function formatDate(dateString: string): Moment {
	return moment(dateString, "DD-MM-YYYY HH:mm Z");
}
