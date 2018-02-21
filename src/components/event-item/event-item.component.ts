import { Input, Component } from "@angular/core";
import { EventItem } from "../../providers/index";
import { Moment } from "moment";

@Component({
	selector: "event-item",
	templateUrl: "event-item.component.html"
})
export class EventItemComponent {

	@Input() eventItem: EventItem;

	constructor(
	) {

	}

	getMembersCount(num): string {
		return num > 3 ? `+ ${num - 3} members` : "";
	}

	getTime(date: Moment): string {
		return date.fromNow() + date.format("HH.mm");
	}

}
