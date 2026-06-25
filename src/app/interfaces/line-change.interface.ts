export interface LineChange {
  type: 'added' | 'removed' | 'unchanged';
  content: string;
  leftLineNumber: number | null;
  rightLineNumber: number | null;
}
