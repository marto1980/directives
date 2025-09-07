import { Directive } from '@angular/core'

@Directive({
  selector: 'a[appSafeLink]',
  host: {
    '(click)': 'onConfirmLeaveApp($event)',
  },
})
export class SafeLink {
  constructor() {
    console.log('Calling AppSafeLink')
  }

  onConfirmLeaveApp(event: Readonly<MouseEvent>) {
    const wantsToLeave = globalThis.confirm(
      'Do you really want to leave the app?',
    )

    if (wantsToLeave) return

    event.preventDefault()
  }
}
