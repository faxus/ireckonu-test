import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { catchError } from "rxjs/operators";

@Injectable()
export class EventClient {
	private apiUrl = "https://tsh-app.firebaseio.com/events.json";
	constructor(
		private http: HttpClient
	) {

	}

	getEvents(): Observable<any> {
		return this.http.get(this.apiUrl).pipe(
			catchError(this.handleError)
		);
	}

	private handleError(error: Response | any) {
		let errMsg: string;
		if (error instanceof Response) {
			const err = error || "";
			errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}
