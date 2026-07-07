import { Plugin } from 'obsidian';
import { DEFAULT_SETTINGS, SimpleHomepageSettings, SimpleHomepageSettingTab } from './settings';
import { openHomepage } from './homepage';

export const APP_NAME = "Simple Homepage";

export default class SimpleHomepage extends Plugin {
	settings!: SimpleHomepageSettings;

	async onload() {
    await this.loadSettings();
    this.addSettingTab(new SimpleHomepageSettingTab(this.app, this));

    this.addCommand({
      id: "open-homepage",
      name: "Open homepage",
      callback: () => this.openHomepage(),
    });
  }

	async onunload() {}

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

  async openHomepage(): Promise<void> {
    await this.app.workspace.openLinkText(
      this.settings.path,
      ""
    );
  }
}
