import { Component, OnDestroy } from "@angular/core";
import { NavController } from "ionic-angular";
import { EventService, EventItem } from "../../providers/index";
import { EventDetailsPage } from "../../pages/event-details/event-details.page";
import { Subscription } from "rxjs/Subscription";

@Component({
	selector: "events-page",
	templateUrl: "events.page.html"
})
export class EventsPage implements OnDestroy {

	todayList: EventItem[];
	thisWeekList: EventItem[];
	otherList: EventItem[];
	eventList: EventItem[];
	isEmpty: boolean;
	errorMessage: string;
	events$$: Subscription

	constructor(
		private eventService: EventService,
		private navCtrl: NavController
	) {
	}

	ionViewDidLoad() {
		this.events$$ = this.eventService.getEvents().subscribe(
			events => this.getLists(events),
			error => this.errorMessage = <any>error
		);
	}

	ngOnDestroy() {
		this.events$$.unsubscribe();
	}

	getLists(events: EventItem[]) {
		this.eventList = events.sort((prev, next) => prev.date.diff(next.date));
		this.isEmpty = events.length === 0;
		this.groupByPeriod();
	}

	groupByPeriod(filterBy: string = "") {
		this.todayList = this.eventList.filter(event => event.period === "today"
			&& event.title.toLowerCase().includes(filterBy.toLowerCase()));
		this.thisWeekList = this.eventList.filter(event => event.period === "thisweek"
			&& event.title.toLowerCase().includes(filterBy.toLowerCase()));
		this.otherList = this.eventList.filter(event => event.period === "other"
			&& event.title.toLowerCase().includes(filterBy.toLowerCase()));
	}

	filterEvents(value: string) {
		this.isEmpty = this.eventList.length === 0;
		if (!value || value.trim().length < 2) {
			this.groupByPeriod();
			return;
		}

		this.groupByPeriod(value);
	}

	onItemClick(item: EventItem) {
		this.navCtrl.push(EventDetailsPage, {
			event: item
		});
	}

}
