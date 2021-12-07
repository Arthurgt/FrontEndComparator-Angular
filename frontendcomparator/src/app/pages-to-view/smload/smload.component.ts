import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game';
import { HttpGamesService } from 'src/app/services/http-games.service';
import { WindowRef } from '../../shared/window-ref/window-ref.component';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-smload',
  templateUrl: './smload.component.html',
  styleUrls: ['./smload.component.scss']
})
export class SmloadComponent implements OnInit, OnDestroy{

  games: Observable<Game[]>;
  window: any;
  dataDownloadTime: number;
  pageLoadTime: number;
  paramsSubscription: any;

  constructor(private http: HttpGamesService, private winRef: WindowRef, private route: ActivatedRoute) {
    this.window = winRef.nativeWindow;
  }

  ngOnInit() {   
    this.games = this.http.getSmallLoad();
    this.paramsSubscription = this.route
      .queryParams
      .subscribe(params => {
        this.pageLoadTime = params['pageLoadTime'];
        this.dataDownloadTime = params['dataDownloadTime'];
      });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
