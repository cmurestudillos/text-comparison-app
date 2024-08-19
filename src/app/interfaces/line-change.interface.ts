export interface LineChange {
  type: 'added' | 'removed' | 'unchanged';
  content: string;
  lineNumber: number;
}
