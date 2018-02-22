import { Input, Component, ChangeDetectionStrategy } from "@angular/core";
import { Member } from "../../providers";

@Component({
	selector: "members",
	templateUrl: "members.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MembersComponent {

	@Input() memberList: Member[];
	@Input() show: number;

	getMembersCount(num: number): string {
		return num > this.show ? `+ ${num - this.show} others` : "";
	}

}
