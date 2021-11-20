import { Component, Input} from '@angular/core';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-game-cover',
  templateUrl: './game-cover.component.html',
  styleUrls: ['./game-cover.component.scss']
})
export class GameCoverComponent {
  @Input() game: Game;
}
