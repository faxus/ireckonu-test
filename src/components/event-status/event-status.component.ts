import { Component, Input } from "@angular/core";
import { StatusType } from "../../providers";

@Component({
	selector: "event-status",
	templateUrl: "event-status.component.html"
})

export class EventStatusComponent {

	@Input() status: StatusType

	constructor() { }

	changeState(event) {
		console.log(event.target.value);
		event.stopPropagation();
	}

	isVisible(btnStatus: StatusType) {
		return this.status === btnStatus || this.status === "none";
	}

	activeClass(btnStatus: StatusType) {
		return this.status === btnStatus ? "active" : "";
	}

	isActive(btnStatus: StatusType) {
		return this.status === btnStatus;
	}

}
