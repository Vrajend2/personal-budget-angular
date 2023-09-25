import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'pb-p404',
  templateUrl: './p404.component.html',
  styleUrls: ['./p404.component.scss']
})
export class P404Component implements OnInit {
  constructor ( public dataService:DataService) {}

  ngOnInit(): void {
        }

}
