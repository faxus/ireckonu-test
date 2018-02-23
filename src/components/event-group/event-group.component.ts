import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from "@angular/core";
import { EventItem } from "../../providers/index";

@Component({
	selector: "event-group",
	templateUrl: "event-group.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class EventGroupComponent {
	constructor(
	) { }

	@Input() groupList: EventItem[];
	@Input() label: string;
	@Output() itemClick = new EventEmitter<EventItem>();
}
