import { Component, computed, inject, signal } from '@angular/core'

import { AuthComponent } from './auth/auth'
import { AuthDirective } from './auth/auth-directive'
import { AuthService } from './auth/auth.service'
import { LearningResourcesComponent } from './learning-resources/learning-resources'
import { Log } from './log'

@Component({
  selector: 'app-root',

  imports: [AuthComponent, LearningResourcesComponent, AuthDirective, Log],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('directives')
  private readonly authService = inject(AuthService)
  private readonly checkIsAdmin = () =>
    this.authService.activePermission() === 'admin'

  isAdmin = computed(this.checkIsAdmin)
}
