import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, HostListener } from '@angular/core';
import { SnakeGame } from './game/snake-game';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent implements OnInit {

  @ViewChild('snakeCanvas') canvasElRef: ElementRef;
  canvasNativeElement: HTMLCanvasElement;

  gameInstance: SnakeGame;

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.canvasNativeElement.height = window.innerHeight;
    this.canvasNativeElement.width = window.innerWidth;
  }

  @HostListener('document:keydown', ['$event'])
  keyPressHandler(event: KeyboardEvent) {
    // send arrrow keys and enter to game, ignore anything else
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' ||
    event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'Enter') {
      this.gameInstance.keyDownHandler(event.key);
    }
  }

  constructor() {
    this.gameInstance = new SnakeGame(this.canvasNativeElement);
  }

  ngOnInit() {
    this.canvasNativeElement = this.canvasElRef.nativeElement;
    this.canvasNativeElement.height = window.innerHeight;
    this.canvasNativeElement.width = window.innerWidth;
  }





}
