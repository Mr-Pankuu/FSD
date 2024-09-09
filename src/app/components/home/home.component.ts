import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { StudentComponent } from "../student/student.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, StudentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
