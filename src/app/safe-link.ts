import { Directive } from '@angular/core'

@Directive({
  selector: 'a[appSafeLink]',
})
export class SafeLink {
  constructor() {
    console.log('Calling the Custom Attribute Directive AppSafeLink')
  }
}
