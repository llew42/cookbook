import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatMenuTrigger } from '@angular/material/menu';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @ViewChild(MatMenuTrigger) recipes: MatMenuTrigger;
  private userSub: Subscription;
  isAuthenticated: boolean = false;

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
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log('Not not ', !!user);
    });
  }

  onMenuOpen() {
    this.recipes.openMenu();
  }

  onSaveRecipes() {
    this.dataStorageService.storeRecipes();
  }

  onFetchRecipes() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
