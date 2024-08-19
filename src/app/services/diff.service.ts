import { Injectable } from '@angular/core';
import { Diff, diff_match_patch } from 'diff-match-patch';

@Injectable({
  providedIn: 'root'
})
export class DiffService {
  private dmp = new diff_match_patch();

  compareTexts(text1: string, text2: string): Diff[] {
    const diff = this.dmp.diff_main(text1, text2);
    this.dmp.diff_cleanupSemantic(diff);
    return diff;
  }
}
