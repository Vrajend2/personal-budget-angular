import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'pb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'personal-budget';
  constructor ( public dataService:DataService) {}

  ngOnInit(): void {
        }

}
