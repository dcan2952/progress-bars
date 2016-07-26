import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit { 
	
	data: any;
	response: any = {
	    "buttons": [
	        10,
	        38,
	        -13,
	        -18,
	        90,
	        20
	    ],
	    "bars": [
	        62,
	        45,
	        62
	    ],
	    "limit": 230
	}

	constructor(private appService: AppService) {}

	ngOnInit() {
		this.appService.get()
            .then(response => this.response = response);
	}

	buttonColumns = function() {
		if (12%this.response.buttons.length == 0) {
			return 12/this.response.buttons.length;
		} else {
			return 2;
		}
	} 

	selectedBarIndex = 0;

	editProgress(editValue) {
		if (this.response.bars[this.selectedBarIndex] + editValue < 0) {
			this.response.bars[this.selectedBarIndex] = 0;
		} else {
			this.response.bars[this.selectedBarIndex] = this.response.bars[this.selectedBarIndex] + editValue;
		}
	}
}
