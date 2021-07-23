import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  serverName: string;
  content: string;
  type: string;

  addServer() {
    this.serverElements.push({
      type: 'server',
      serverName: this.serverName,
      content: this.content
    })

    this.content = '';
    this.serverName = '';
  }

  addPC() {
    this.serverElements.push({
      type: 'pc',
      serverName: this.serverName,
      content: this.content
    })

    this.content = '';
    this.serverName = '';
  }
  serverElements = [];
}