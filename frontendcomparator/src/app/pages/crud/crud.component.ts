import { Component } from '@angular/core';
import { Game } from 'src/app/models/game';
import { HttpGamesService } from 'src/app/services/http-games.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {

  model: Partial<Game> = {};

  constructor(private http: HttpGamesService) { }

  send() {
    this.http.postGame(this.model as Game).subscribe(
      result => console.log(result),
      error => console.error(error)
    );
  }

}
