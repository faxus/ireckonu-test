import { Input, Component } from "@angular/core";
import * as moment from "moment";
import { Moment } from "moment";

@Component({
	selector: "event-thumb",
	templateUrl: "event-thumbnail.html"
})
export class EventThumbnail {

	@Input() eventDate: Moment;
	@Input() eventImg: string;
	errorMessage: string;

	getDate(date: Moment): string {
		return moment(date).format("DD MMM");
	}

}
