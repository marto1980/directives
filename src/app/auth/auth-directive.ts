import { Directive, effect, inject, input } from '@angular/core'

import { Permission } from './auth.model'
import { AuthService } from './auth.service'

@Directive({
  selector: '[appAuth]',
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' })
  private readonly authService = inject(AuthService)
  constructor() {
    effect(() => {
      if (this.userType() === this.authService.activePermission()) {
        console.log('SHOW ELEMENT')
      } else {
        console.log('DO NOT SHOW ELEMENT')
      }
    })
  }
}
