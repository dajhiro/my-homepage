import { App, PluginSettingTab, Setting } from 'obsidian';
import { FileSuggest } from './suggest';
import SimpleHomepage from './main';

export interface SimpleHomepageSettings {
	homepagePath: string;
  openOnStartup: boolean;
}

export const DEFAULT_SETTINGS: SimpleHomepageSettings = {
	homepagePath: 'Home.md',
  openOnStartup: false
};

export class SimpleHomepageSettingTab extends PluginSettingTab {
	plugin: SimpleHomepage;

	constructor(app: App, plugin: SimpleHomepage) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;
		containerEl.empty();

		new Setting(containerEl)
			.setName('Path')
			.setDesc("Enter the path to use as your homepage.")
			.addText((text) => {
				text
					.setPlaceholder('Home.md')
					.setValue(this.plugin.settings.homepagePath)
          .inputEl.addEventListener('blur', () => {
            text.setValue(this.plugin.settings.homepagePath);
          });

        new FileSuggest(this.app, text.inputEl).onSelect(async (file) => {
          this.plugin.settings.homepagePath = file.path;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName('Open on startup')
      .setDesc("Automatically open the homepage on startup when the workspace is empty.")
      .addToggle((toggle) => {
        toggle
          .setValue(this.plugin.settings.openOnStartup)
          .onChange(async (value) => {
            this.plugin.settings.openOnStartup = value;
            await this.plugin.saveSettings();
          });
      });
	}
}
