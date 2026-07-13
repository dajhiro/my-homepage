import { App, PluginSettingTab, Setting } from 'obsidian';
import { FileSuggest } from './suggest';
import SimpleHomepage from './main';

export interface SimpleHomepageSettings {
	path: string;
  onStartup: boolean;
}

export const DEFAULT_SETTINGS: SimpleHomepageSettings = {
	path: 'Home.md',
  onStartup: false
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
					.setValue(this.plugin.settings.path)
          .inputEl.addEventListener('blur', () => {
            text.setValue(this.plugin.settings.path);
          });

        new FileSuggest(this.app, text.inputEl).onSelect(async (file) => {
          this.plugin.settings.path = file.path;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName('Startup')
      .setDesc("Open the homepage automatically on startup.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.onStartup).onChange(async (value) => {
          this.plugin.settings.onStartup = value;
          await this.plugin.saveSettings();
        });
      });
	}
}
