import { Component, inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DiffService } from '../../services/diff.service';
import { Diff } from 'diff-match-patch';
import { TextInputComponent } from '../text-input/text-input.component';
import { DiffDisplayComponent } from '../diff-display/diff-display.component';

@Component({
  selector: 'app-text-comparison',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    TextInputComponent,
    DiffDisplayComponent,
  ],
  templateUrl: './text-comparison.component.html',
  styleUrl: './text-comparison.component.scss',
})
export class TextComparisonComponent {
  private diffService = inject(DiffService);

  text1 = '';
  text2 = '';
  diffResult: Diff[] | null = null;

  get canCompare(): boolean {
    return this.text1.trim().length > 0 || this.text2.trim().length > 0;
  }

  get hasNoDifferences(): boolean {
    return !!this.diffResult && this.diffResult.every(([type]) => type === 0);
  }

  compareTexts() {
    this.diffResult = this.diffService.compareTexts(this.text1, this.text2);
  }
}
