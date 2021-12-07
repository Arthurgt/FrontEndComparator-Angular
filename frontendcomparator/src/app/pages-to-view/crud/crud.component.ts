import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Game } from 'src/app/models/game';
import { HttpGamesService } from 'src/app/services/http-games.service';
import randomWords from 'random-words';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {

  modelToAdd: Partial<Game> = {};
  titleToRemove: string;

  constructor(private http: HttpGamesService) { }

  addGame(createForm: NgForm) {
    this.http.postGame(this.modelToAdd as Game).subscribe(
      result => console.log(result),
      error => console.error(error)
    );
    createForm.reset();
  }

  add100Games() {
    let title = randomWords();
    let oldTitle = title;
    for(let i=0; i<100; i++) {
      title = title + i;
      this.http.post100Games(title).subscribe(
        result => console.log(result),
        error => console.error(error)
      );
      title = oldTitle;
    }
  }

  add1000Games() {
    let title = randomWords();
    let oldTitle = title;
    for(let i=0; i<1000; i++) {
      title = title + i;
      this.http.post100Games(title).subscribe(
        result => console.log(result),
        error => console.error(error)
      );
      title = oldTitle;
    }
  }

  removeGame(removeForm: NgForm) {
    this.http.removeGame(this.titleToRemove).subscribe(
      result => console.log(result),
      error => console.error(error)
    );
    removeForm.reset();
  }

}
