import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DiffService } from '../../services/diff.service';
import { Diff } from 'diff-match-patch';
import { TextInputComponent } from '../text-input/text-input.component';
import { DiffDisplayComponent } from '../diff-display/diff-display.component';


@Component({
  selector: 'app-text-comparison',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, TextInputComponent, DiffDisplayComponent],
  templateUrl: './text-comparison.component.html',
  styleUrl: './text-comparison.component.scss'
})
export class TextComparisonComponent {
  text1 = '';
  text2 = '';
  diffResult: Diff[] | null = null;

  constructor(private diffService: DiffService) {}

  compareTexts() {
    this.diffResult = this.diffService.compareTexts(this.text1, this.text2);
  }
}
