import { Component } from '@angular/core'

import { SafeLink } from '../safe-link'

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.html',
  styleUrl: './learning-resources.scss',
  standalone: true,
  imports: [SafeLink],
})
export class LearningResourcesComponent {}
