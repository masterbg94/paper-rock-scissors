import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paper-rock-scissors';
  selectedGameType: string = 'player';
  cpuChoice: string[] = ['rock', 'paper', 'scissors'];
  gameResult: { player: number; cpu: number; cpu1: number } = {
    player: 0,
    cpu: 0,
    cpu1: 0
  };
  computer: boolean|string = false;
  computer1: boolean|string = false;
  singleGameResult: string = '';

  selectGameType(x: string) {
    this.selectedGameType = x;
    this.resetGame();
  }

  selectPlay(userSelect?: string) {
    this.computer = this.cpuPlay();
    if (userSelect) {
      this.singleGameResult = this.computer + '_' + userSelect;
      switch (this.singleGameResult) {
        case 'rock_paper':
        case 'paper_scissors':
        case 'scissors_rock':
          this.gameResult.player++;
          break;
        case 'paper_rock':
        case 'scissors_paper':
        case 'rock_scissors':
          this.gameResult.cpu++;
          break;
        default:
          this.gameResult.cpu++;
          this.gameResult.player++;
      }
    } else {
      this.computer1 = this.cpuPlay();
      this.singleGameResult = this.computer + '_' + this.computer1;
      switch (this.singleGameResult) {
        case 'rock_paper':
        case 'paper_scissors':
        case 'scissors_rock':
          this.gameResult.cpu1++;
          break;
        case 'paper_rock':
        case 'scissors_paper':
        case 'rock_scissors':
          this.gameResult.cpu++;
          break;
        default:
          this.gameResult.cpu++;
          this.gameResult.cpu1++;
      }
    }
  }

  cpuPlay() {
    return this.cpuChoice[Math.floor(Math.random() * this.cpuChoice.length) | 0];
  }

  resetGame() {
    this.gameResult.player = 0;
    this.gameResult.cpu = 0;
    this.gameResult.cpu1 = 0;
    this.computer = false;
    this.computer1 = false;
  }

  cpucpu() {
    this.selectedGameType = 'cpu';
    this.selectPlay();
  }
}
