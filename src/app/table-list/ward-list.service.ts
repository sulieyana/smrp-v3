import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class WardListService {
	private endpoint: string = 'http://10.4.104.59/lookup/api/v1/wards?size=20';

	constructor(private http: HttpClient) {}

	getWards() {
		let options = {};
		return this.http.get(this.endpoint, options);
	}
}
