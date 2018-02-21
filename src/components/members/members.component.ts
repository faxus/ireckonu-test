import { Input, Component } from "@angular/core";
import { Member } from "../../providers";

@Component({
	selector: "members",
	templateUrl: "members.component.html"
})
export class MembersComponent {

	@Input() memberList: Member[];

	getMembersCount(num): string {
		return num > 3 ? `+ ${num - 3} members` : "";
	}

}
