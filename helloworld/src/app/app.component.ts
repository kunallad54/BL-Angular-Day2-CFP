import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'helloworld';
  imgUrl="";
  url="";
  userName: string = "";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz";
    this.imgUrl = "../assets/Bridgelabz-logo.jpg"
    this.url = "https://www.bridgelabz.com";
  } 

  OnClick($event: any) {
    console.log("Save Button is Clicked",$event);
    window.open(this.url,"_blank");
  }
  
}
