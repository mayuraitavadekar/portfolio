import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html' ,
  styleUrls: [
    './skills.component.css'
  ]
})
export class SkillsComponent implements OnInit,AfterViewInit {

  @ViewChild('firstCanvas', { static: true }) myCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('secondCanvas', { static: true }) secondCanvas!: ElementRef<HTMLCanvasElement>;  
  @ViewChild('thirdCanvas', { static: true }) thirdCanvas!: ElementRef<HTMLCanvasElement>;  


  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    
    // draw first canvas
    const canvas1: HTMLCanvasElement = this.myCanvas.nativeElement;
    const ctx1 = canvas1.getContext("2d");
    if(ctx1)
    {
      this.#drawfirstRadar(ctx1);
    }

    // draw second canvas
    const canvas2: HTMLCanvasElement = this.secondCanvas.nativeElement;
    const ctx2 = canvas2.getContext("2d");
    if(ctx2)
    {
      this.#drawSecondRadar(ctx2);
    }

    // draw third canvas
    const canvas3: HTMLCanvasElement = this.thirdCanvas.nativeElement;
    const ctx3 = canvas3.getContext("2d");
    if(ctx3)
    {
      this.#drawThirdRadar(ctx3);
    }
  }

  #drawThirdRadar(ctx: CanvasRenderingContext2D): void {
    // draw outer radar
    ctx.beginPath();
    ctx.fillStyle = "#fb7185";
    ctx.strokeStyle = "#fb7185";
    ctx.imageSmoothingQuality = "high"
    ctx.moveTo(90, 70);
    ctx.lineTo(70, 145);
    ctx.lineTo(140, 210);
    ctx.lineTo(210, 145 );
    ctx.lineTo(190, 70);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // put texts
    ctx.font='15px Courier New';
    ctx.fillText("Python", 50, 50);
    ctx.font='15px Courier New';
    ctx.fillText("GIT", 180, 50);
    ctx.font='15px Courier New';
    ctx.fillText("OOPS", 220, 150);
    ctx.font='15px Courier New';
    ctx.fillText("Java", 125, 230);
    ctx.font='15px Courier New';
    ctx.fillText("AWS", 30, 155);
    ctx.font='15px Courier New';
    ctx.fillText("OTHER", 110, 10);

    // draw inner radar
    ctx.beginPath()
    ctx.fillStyle = "#e11d48";
    ctx.imageSmoothingQuality = "high"
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#be123c";
    ctx.moveTo(100, 83);
    ctx.lineTo(90, 140);
    ctx.lineTo(140, 185);
    ctx.lineTo(195, 140);
    ctx.lineTo(175, 90);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  #drawSecondRadar(ctx: CanvasRenderingContext2D): void {
    // draw outer radar
    ctx.beginPath();
    ctx.fillStyle = "#10b981";
    ctx.strokeStyle = "#10b981";
    ctx.imageSmoothingQuality = "high"
    ctx.moveTo(90, 70);
    ctx.lineTo(70, 145);
    ctx.lineTo(140, 210);
    ctx.lineTo(210, 145 );
    ctx.lineTo(190, 70);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // put texts
    ctx.font='15px Courier New';
    ctx.fillText("HTML", 50, 50);
    ctx.font='15px Courier New';
    ctx.fillText("CSS", 180, 50);
    ctx.font='15px Courier New';
    ctx.fillText("JS", 220, 150);
    ctx.font='15px Courier New';
    ctx.fillText("Responsive UI", 85, 230);
    ctx.font='15px Courier New';
    ctx.fillText("JQuery", 10, 150);
    ctx.font='15px Courier New';
    ctx.fillText("FUNDAMENTALS", 80, 10);

    // draw inner radar
    ctx.beginPath()
    ctx.fillStyle = "#059669";
    ctx.imageSmoothingQuality = "high"
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#047857";
    ctx.moveTo(100, 83);
    ctx.lineTo(90, 140);
    ctx.lineTo(140, 185);
    ctx.lineTo(195, 140);
    ctx.lineTo(180, 80);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  #drawfirstRadar(ctx: CanvasRenderingContext2D): void {

    // draw outer radar
    ctx.beginPath();
    ctx.fillStyle = "#0ea5e9";
    ctx.strokeStyle = "#0ea5e9";
    ctx.imageSmoothingQuality = "high"
    ctx.moveTo(90, 70);
    ctx.lineTo(70, 145);
    ctx.lineTo(140, 210);
    ctx.lineTo(210, 145 );
    ctx.lineTo(190, 70);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // put texts
    ctx.font='15px Courier New';
    ctx.fillText("Angular", 50, 50);
    ctx.font='15px Courier New';
    ctx.fillText("React", 180, 50);
    ctx.font='15px Courier New';
    ctx.fillText("Spring", 220, 150);
    ctx.font='15px Courier New';
    ctx.fillText("MongoDB/SQL", 100, 230);
    ctx.font='15px Courier New';
    ctx.fillText("Express", 0, 150);
    ctx.font='15px Courier New';
    ctx.fillText("FULL STACK", 100, 10);

    // draw inner radar
    ctx.beginPath()
    ctx.fillStyle = "#0284c7";
    ctx.imageSmoothingQuality = "high"
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#075985";
    ctx.moveTo(100, 83);
    ctx.lineTo(80, 140);
    ctx.lineTo(140, 195);
    ctx.lineTo(175, 140);
    ctx.lineTo(175, 90);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

  }

}

