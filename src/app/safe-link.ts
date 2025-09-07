import { Directive, input } from '@angular/core'

@Directive({
  selector: 'a[appSafeLink]',
  host: {
    '(click)': 'onConfirmLeaveApp($event)',
  },
})
export class SafeLink {
  queryParam = input('myapp')
  constructor() {
    console.log('Calling AppSafeLink')
  }

  onConfirmLeaveApp(event: Readonly<MouseEvent>) {
    const wantsToLeave = globalThis.confirm(
      'Do you really want to leave the app?',
    )

    if (wantsToLeave) {
      const href = (event.target as HTMLAnchorElement).href
      ;(event.target as HTMLAnchorElement).href =
        href + `?from=${this.queryParam()}`

      return
    }

    event.preventDefault()
  }
}
