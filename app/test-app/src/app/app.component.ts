import { Component } from '@angular/core';
import {NgDynamoSync, EventName} from 'ng-dynamosync';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private items = [6,7,8];
  private serverDomain = 'http://54.213.212.103:3000';
  private title = 'hello';
  private sub: Subscription;

  ngOnInit() {
    this.sub = new NgDynamoSync('MusicLibraryTest', this.serverDomain).bindToListModel(this.items);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
