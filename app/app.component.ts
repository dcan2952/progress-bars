import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit { 
	
	loading: boolean = true;
	response: any; 

	constructor(private appService: AppService) {}

	ngOnInit() {
		this.appService.get()
            .then(response => this.response = response)
            .then(() => this.loading = false);
	}

	selectedBarIndex = 0;

	editProgress(editValue) {
		if (this.response.bars[this.selectedBarIndex] + editValue < 0) {
			this.response.bars[this.selectedBarIndex] = 0;
		} else {
			this.response.bars[this.selectedBarIndex] = this.response.bars[this.selectedBarIndex] + editValue;
		}
	}

	refresh() {
		this.loading = true;
		this.appService.get()
            .then(response => this.response = response)
            .then(() => this.loading = false);
	}
}
