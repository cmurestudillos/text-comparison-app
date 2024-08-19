import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Diff } from 'diff-match-patch';
import { LineChange } from '../../interfaces/line-change.interface';

@Component({
  selector: 'app-diff-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diff-display.component.html',
  styleUrl: './diff-display.component.scss'
})
export class DiffDisplayComponent implements OnChanges {
  @Input() diff: Diff[] = [];
  lines: LineChange[] = [];

  ngOnChanges() {
    this.processChanges();
  }

  processChanges() {
    this.lines = [];
    let leftLineNumber = 1;
    let rightLineNumber = 1;

    for (const [type, content] of this.diff) {
      const lines = content.split('\n');
      for (let i = 0; i < lines.length; i++) {
        if (i === lines.length - 1 && lines[i] === '') continue;

        const lineChange: LineChange = {
          type: type === -1 ? 'removed' : type === 1 ? 'added' : 'unchanged',
          content: lines[i],
          lineNumber: type !== 1 ? leftLineNumber : rightLineNumber
        };

        if (type !== 1) leftLineNumber++;
        if (type !== -1) rightLineNumber++;

        this.lines.push(lineChange);
      }
    }
  }

  getChangeTypeSymbol(type: string): string {
    switch (type) {
      case 'added': return '+';
      case 'removed': return '-';
      default: return ' ';
    }
  }
}
