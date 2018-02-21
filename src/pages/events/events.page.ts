import { Component } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { EventService, EventItem } from "../../providers/index";

@Component({
	selector: "events-page",
	templateUrl: "events.page.html"
})
export class EventsPage {

	eventList: EventItem[];
	errorMessage: string;
	events$$: Subscription;

	constructor(
		private eventService: EventService
	) {

	}

	ionViewDidLoad() {
		this.events$$ = this.eventService.getEvents()
			.subscribe(
				events => {
					this.eventList = events
						.sort((prev,next) => prev.date.diff(next.date))
				},
				error => this.errorMessage = <any>error);
	}

	ngOnDestroy() {
		this.events$$.unsubscribe();
	}

}
