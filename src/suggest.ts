import { AbstractInputSuggest, App, TFile } from 'obsidian';

export class FileSuggest extends AbstractInputSuggest<TFile> {
  constructor(app: App, private inputEl: HTMLInputElement) {
    super(app, inputEl);
  }

  getSuggestions(query: string): TFile[] {
    const lower = query.toLowerCase();
    return this.app.vault
      .getMarkdownFiles()
      .filter((file) => file.path.toLowerCase().includes(lower))
      .slice(0, 20);
  }

  renderSuggestion(file: TFile, el: HTMLElement): void {
    el.setText(file.path);
  }

  selectSuggestion(file: TFile, evt: MouseEvent | KeyboardEvent): void {
    this.inputEl.value = file.path;
    super.selectSuggestion(file, evt);
    this.close();
  }
}
