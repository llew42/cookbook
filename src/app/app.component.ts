import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cookbook';
  loadedNav = 'recipes';

  onNav(navLink: string){
    this.loadedNav = navLink;
  }
}
