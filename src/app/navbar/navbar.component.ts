import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatMenuTrigger } from '@angular/material/menu';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild(MatMenuTrigger) recipes: MatMenuTrigger;

  // isSmall$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Small)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );

  // isXSmall$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.XSmall)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {}

  onMenuOpen() {
    this.recipes.openMenu();
  }

  onSaveRecipes() {
    this.dataStorageService.storeRecipes();
  }

  onFetchRecipes() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
