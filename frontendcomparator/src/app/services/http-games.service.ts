import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Game } from '../models/game';
import randomWords from '../../../node_modules/random-words';

@Injectable({
    providedIn: 'root'
})
export class HttpGamesService {

    private url: String ='http://localhost:8081';

    private headerDict;
    private requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(), 
    };

    private gameToSpam : Game = {
      category: "strategy",
      country: "poland",
      description: "created by spam button",
      poster: "https://www.gry-online.pl/i/h/17/375272624.jpg",
      studio: "cdProjectRed",
      year: "2021",
      title: ""
    };
    
    constructor(private http: HttpClient) {}

    getGame(title: String): Observable<Game> {
        this.headerDict = { 'title' : title};
        this.requestOptions.headers = this.headerDict;
        return this.http.get<Game>(this.url + '/getGame', this.requestOptions);
    }

    getLargeLoad(): Observable<Game[]> {
      this.headerDict = { 'Content-Type' : 'application/json'};
      this.requestOptions.headers = this.headerDict;
      return this.http.get<Game[]>(this.url + '/getLargeLoad', this.requestOptions);
    }

    getMediumLoad(): Observable<Game[]> {
      this.headerDict = { 'Content-Type' : 'application/json'};
      this.requestOptions.headers = this.headerDict;
      return this.http.get<Game[]>(this.url + '/getMediumLoad', this.requestOptions);
    }

    getSmallLoad(): Observable<Game[]> {
      this.headerDict = { 'Content-Type' : 'application/json'};
      this.requestOptions.headers = this.headerDict;
      return this.http.get<Game[]>(this.url + '/getSmallLoad', this.requestOptions);
    }

    postGame(game: Game): Observable<Game[]> {
      this.headerDict = { 'Content-Type' : 'application/json'};
      this.requestOptions.headers = this.headerDict;
      return this.http.post<Game>(this.url + '/createGame', game, this.requestOptions).pipe(tap(console.log));
    }

    post100Games(title: string): Observable<Game[]> {
      this.headerDict = { 'Content-Type' : 'application/json'};
      this.requestOptions.headers = this.headerDict;
      this.gameToSpam.title = title;
      return this.http.post<Game>(this.url + '/createGame', this.gameToSpam, this.requestOptions).pipe(tap(console.log));
    }

    post1000Games(title: string): Observable<Game[]>  {
      this.headerDict = { 'Content-Type' : 'application/json'};
      this.requestOptions.headers = this.headerDict;
      this.gameToSpam.title = title;
      return this.http.post<Game>(this.url + '/createGame', this.gameToSpam, this.requestOptions).pipe(tap(console.log));
    }

    removeGame(title: string): Observable<Game[]> {
      this.headerDict = { 'Content-Type' : 'application/json'};
      this.requestOptions.headers = this.headerDict;
      return this.http.delete<Game>(this.url + '/deleteGame/' + title, this.requestOptions).pipe(tap(console.log));
    }

}