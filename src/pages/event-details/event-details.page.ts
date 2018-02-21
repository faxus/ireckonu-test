import { Component, } from "@angular/core";
import { NavParams } from "ionic-angular";
import { EventItem } from "../../providers/index";

@Component({
	selector: "event-details-page",
	templateUrl: "event-details.page.html"
})
export class EventDetailsPage {

	eventItem: EventItem;

	constructor(
		private navParams: NavParams
	) {

	}

	ionViewDidLoad() {
		this.eventItem = this.navParams.get("event");
	}
}
