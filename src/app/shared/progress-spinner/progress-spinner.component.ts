import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  template: '<mat-spinner></mat-spinner>',
})
export class ProgressSpinner {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
}
