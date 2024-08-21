import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CourseDetailComponent } from "./pages/course-detail/course-detail.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  router = inject(Router);

  ngOnInit(): void {
    // this.router.navigate(['course']);
  }
  title = 'courses';
}
