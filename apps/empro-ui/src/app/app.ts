import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@angular/shared-lib';

@Component({
  imports: [RouterModule, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'empro-ui';
}
