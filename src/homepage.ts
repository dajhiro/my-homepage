import { APP_NAME } from './main';
import { App, Notice } from 'obsidian';

export type OpenMode = 'current' | 'tab' | 'split' | 'window';

export async function openHomepage(
  app: App,
  homepagePath: string,
  mode: OpenMode = 'current',
): Promise<void> {
  const file = app.vault.getFileByPath(homepagePath);
  if (!file) {
    new Notice(`${APP_NAME}: File not found.\nPath: ${homepagePath}`);
    return ;
  }

  if (mode === 'current' && app.workspace.getActiveFile()?.path === file.path) {
    new Notice(`${APP_NAME}: Already open!`, 1000);
    return ;
  }

  const leaf = 
    mode === 'current'
      ? app.workspace.getLeaf(false)
      : mode === 'window'
        ? app.workspace.getLeaf('window')
        : mode === 'split'
          ? app.workspace.getLeaf('split')
          : app.workspace.getLeaf('tab');

  await leaf.openFile(file);
}
