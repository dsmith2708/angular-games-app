import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent implements OnInit {
  @ViewChild('snakeCanvas') canvasElRef: ElementRef;
  canvasNativeElement: HTMLCanvasElement;

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.canvasNativeElement.height = window.innerHeight;
    this.canvasNativeElement.width = window.innerWidth;
  }

  constructor() { }

  ngOnInit() {
    this.canvasNativeElement = this.canvasElRef.nativeElement;
    this.canvasNativeElement.height = window.innerHeight;
    this.canvasNativeElement.width = window.innerWidth;
  }





}
