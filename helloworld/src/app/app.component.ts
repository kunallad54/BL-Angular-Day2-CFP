import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'helloworld';

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz";
  } 
}