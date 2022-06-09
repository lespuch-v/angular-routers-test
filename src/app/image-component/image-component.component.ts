import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.css']
})
export class ImageComponentComponent implements OnInit {
  img: string = "assets/profile.png"
  constructor() { }

  ngOnInit(): void {
  }

}
