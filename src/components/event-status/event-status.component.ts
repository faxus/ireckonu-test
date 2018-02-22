import { Component, Input, Output, EventEmitter } from "@angular/core";
import { StatusType } from "../../providers";

@Component({
	selector: "event-status",
	templateUrl: "event-status.component.html"
})

export class EventStatusComponent {

	@Input() status: StatusType
	@Output() statusChange = new EventEmitter<StatusType>();

	constructor() { }

	onChangeState(value: StatusType) {
		if(this.isActive(value))
			value = "none"; // reset the status
		this.statusChange.emit(value);
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
