import { Component, OnInit } from '@angular/core';
import { WardListService } from './ward-list.service';

@Component({
	selector: 'app-table-list',
	templateUrl: './table-list.component.html',
	styleUrls: ['./table-list.component.css'],
})
export class TableListComponent implements OnInit {
	data: any = {};
	constructor(private wards: WardListService) {}

	ngOnInit() {
		this.getWardsListing();
	}

	getWardsListing() {
		this.wards.getWards().subscribe((res) => {
			this.data = res['content'].filter((a) => a.wardDetails.length);
			console.log(res, this.data);
		});
	}
}
