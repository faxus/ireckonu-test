import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Subscription } from "rxjs/Subscription";
import { EventService, EventItem } from "../../providers/index";
import { EventDetailsPage } from "../../pages/event-details/event-details.page";

@Component({
	selector: "events-page",
	templateUrl: "events.page.html"
})
export class EventsPage {

	eventList: EventItem[];
	errorMessage: string;
	events$$: Subscription;

	constructor(
		private eventService: EventService,
		private navCtrl: NavController
	) {

	}

	onItemClick(item: EventItem) {
		this.navCtrl.push(EventDetailsPage, {
			event: item
		});
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
