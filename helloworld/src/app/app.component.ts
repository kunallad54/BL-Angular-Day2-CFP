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
  nameError: string="";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz";
    this.imgUrl = "../assets/Bridgelabz-logo.jpg"
    this.url = "https://www.bridgelabz.com";
  } 

  OnClick($event: any) {
    console.log("Save Button is Clicked",$event);
    window.open(this.url,"_blank");
  }

  onInput($event:any) {
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    }
    this.nameError = "Name is incorrect!";
  }
  
}
