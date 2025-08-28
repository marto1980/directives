import { Component, signal } from '@angular/core'

import { AuthComponent } from './auth/auth'
import { LearningResourcesComponent } from './learning-resources/learning-resources'

@Component({
  selector: 'app-root',
  imports: [AuthComponent, LearningResourcesComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('directives')
}
