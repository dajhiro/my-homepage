import { Plugin } from 'obsidian';
import { DEFAULT_SETTINGS, SimpleHomepageSettings, SimpleHomepageSettingTab } from './settings';
import { openHomepage } from './homepage';

export const APP_NAME = "Simple Homepage";

export default class SimpleHomepage extends Plugin {
	settings!: SimpleHomepageSettings;

	async onload() {
    await this.loadSettings();
    this.addSettingTab(new SimpleHomepageSettingTab(this.app, this));

    // Command: Simple Homepage: Open Homepage
    this.addCommand({
      id: "open-homepage",
      name: "Open homepage",
      callback: () => openHomepage(this.app, this.settings.path),
    });

    // Startup
    this.app.workspace.onLayoutReady(() => {
      if (!this.settings.onStartup) return ;
      if (this.app.workspace.getMostRecentLeaf()?.view.getViewType() !== 'empty') return ;

      void openHomepage(this.app, this.settings.path);
    });
  }

	async loadSettings() {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			(await this.loadData()) as Partial<SimpleHomepageSettings>,
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
