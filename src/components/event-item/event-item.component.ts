import { Input, Component, ChangeDetectionStrategy } from "@angular/core";
import { EventItem, StatusType } from "../../providers/index";
import { Moment } from "moment";

@Component({
	selector: "event-item",
	templateUrl: "event-item.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventItemComponent {

	@Input() eventItem: EventItem;

	constructor(
	) {
	}

	handleStatusChange(newStatus: StatusType) {
		this.eventItem.status = newStatus;
	}

	getTime(date: Moment): string {
		const periods = {
			sameDay: "[Today]",
			nextDay: "[Tomorrow]",
			nextWeek: "dddd",
			lastDay: "[Yesterday]",
			lastWeek: "[Last] dddd",
			sameElse: "DD MMM"
		};
		return `${date.calendar(null, periods)}, from ${date.format("HH.mm")}`;
	}

}
