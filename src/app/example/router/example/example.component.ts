import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, RouterModule, AppComponent],
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {

}
