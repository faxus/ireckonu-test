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
	isEmpty: boolean = true;
	showError: boolean = false;
	events$$: Subscription

	constructor(
		private eventService: EventService,
		private navCtrl: NavController
	) {
	}

	ionViewDidLoad() {
		this.events$$ = this.eventService.getEvents().subscribe(
			events => {
				this.getLists(events);
				this.showError = false;
			},
			error => {
				this.showError = true;
			}
		);
	}

	ngOnDestroy() {
		this.events$$.unsubscribe();
	}

	getLists(events: EventItem[]) {
		this.eventList = events.sort((prev, next) => prev.date.diff(next.date));
		this.groupByPeriod();
	}

	groupByPeriod(filterBy: string = "") {
		this.todayList = this.eventList.filter(event => event.period === "today"
			&& event.title.toLowerCase().includes(filterBy.toLowerCase()));
		this.thisWeekList = this.eventList.filter(event => event.period === "thisweek"
			&& event.title.toLowerCase().includes(filterBy.toLowerCase()));
		this.otherList = this.eventList.filter(event => event.period === "other"
			&& event.title.toLowerCase().includes(filterBy.toLowerCase()));
		this.isEmpty = this.todayList.length + this.thisWeekList.length + this.otherList.length === 0;
	}

	filterEvents(value: string) {
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
