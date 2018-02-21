import { Component } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
// import { NavController } from "ionic-angular";
import { EventService, Event } from "../../providers/index";
import { Moment } from "moment";

@Component({
	selector: "events-page",
	templateUrl: "events.page.html"
})
export class EventsPage {

	events: Event[];
	errorMessage: string;
	events$$: Subscription;

	constructor(
		// private navCtrl: NavController,
		private eventService: EventService
	) {

	}

	//Use ngOnInit if no need of NavController
	ionViewDidLoad() {
		this.events$$ = this.eventService.getEvents()
			.subscribe(
				events => {
					this.events = events
						.sort((prev,next) => prev.date.diff(next.date))
				},
				error => this.errorMessage = <any>error);
	}

	getMembersCount(num): string {
		return num > 3 ? `+ ${num - 3} members` : "";
	}

	getTime(date: Moment): string {
		return date.fromNow() + date.format("HH.mm");
	}

	ngOnDestroy() {
		this.events$$.unsubscribe();
	}

}
