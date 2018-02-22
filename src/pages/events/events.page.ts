import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { EventService, EventItem } from "../../providers/index";
import { EventDetailsPage } from "../../pages/event-details/event-details.page";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { tap } from "rxjs/operators";

@Component({
	selector: "events-page",
	templateUrl: "events.page.html"
})
export class EventsPage {

	filteredList$: Observable<EventItem[]>;
	isEmpty: boolean;
	eventList: EventItem[];
	errorMessage: string;

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

	filterEvents(value: string) {
		if (!value || value.trim().length < 2) {
			this.filteredList$ = of(this.eventList).pipe(
				tap(events => this.isEmpty = events.length === 0)
			);
			return;
		}

		this.filteredList$ = of(this.eventList.filter((event) => {
			return (event.title.toLowerCase().includes(value.toLowerCase()));
		})).pipe(
			tap(events => this.isEmpty = events.length === 0)
		);
	}

	ionViewDidLoad() {
		this.filteredList$ = this.eventService.getEvents().pipe(
			tap(events => {
				this.eventList = events.sort((prev, next) => prev.date.diff(next.date))
			}, error => this.errorMessage = <any>error),
			tap(events => this.isEmpty = events.length === 0)
		);
	}

}
