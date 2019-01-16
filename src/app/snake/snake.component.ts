import { Component, OnInit, ViewChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent implements OnInit {

  @ViewChild('snakeCanvas') canvasElRef: ElementRef;
  canvasNativeElement: HTMLCanvasElement;

  constructor() { }

  ngOnInit() {
    this.canvasNativeElement = this.canvasElRef.nativeElement;
    this.canvasNativeElement.height = window.innerHeight;
    this.canvasNativeElement.width = window.innerWidth;
  }



}
