import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
    providedIn: 'root'
})
export class HttpGamesService {

    private url: String ='http://localhost:8081';

    private headerDict;
    private requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(), 
      };
    
    constructor(private http: HttpClient) {}

    getGame(title: String): Observable<Game> {
        this.headerDict = { 'title' : title};
        this.requestOptions.headers = this.headerDict;
        return this.http.get<Game>(this.url + '/getGame', this.requestOptions);
      }

}