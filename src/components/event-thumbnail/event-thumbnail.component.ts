import { Input, Component, ChangeDetectionStrategy } from "@angular/core";
import * as moment from "moment";
import { Moment } from "moment";

@Component({
	selector: "event-thumb",
	templateUrl: "event-thumbnail.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventThumbnail {

	@Input() eventDate: Moment;
	@Input() eventImg: string;

	getDay(date: Moment) {
		return moment(date).format("DD");
	}

	getMonth(date: Moment) {
		return moment(date).format("MMM");
	}

}
