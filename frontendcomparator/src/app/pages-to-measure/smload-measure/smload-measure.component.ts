import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game';
import { HttpGamesService } from 'src/app/services/http-games.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-smload-measure',
  templateUrl: './smload-measure.component.html',
  styleUrls: ['./smload-measure.component.scss']
})
export class SmloadMeasureComponent implements OnInit, AfterViewInit {

  games: Observable<Game[]>;
  performance: Performance;
  dataDownloadTime: number;
  pageLoadTime: number;

  constructor(private http: HttpGamesService, private router: Router){}

  ngOnInit() {   
    performance.mark('loadPageMark'); 
    performance.mark('downloadDataMark');
    this.games = this.http.getSmallLoad();
    performance.mark('downloadDataMark');
    let downloadDataMarks = performance.getEntriesByName('downloadDataMark');
    this.dataDownloadTime = (downloadDataMarks[1].startTime - downloadDataMarks[0].startTime);
  }
  
  ngAfterViewInit(){
    performance.mark('loadPageMark');
    let loadPageMarks = performance.getEntriesByName('loadPageMark');
    this.pageLoadTime = (loadPageMarks[1].startTime - loadPageMarks[0].startTime);
    this.router.navigate(['/smload'],{ queryParams: { pageLoadTime: this.pageLoadTime, dataDownloadTime: this.dataDownloadTime} });
  }

}
