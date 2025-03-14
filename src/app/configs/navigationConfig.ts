import i18next from 'i18next';
import { FuseNavItemType } from '@fuse/core/FuseNavigation/types/FuseNavItemType';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

/**
 * The navigationConfig object is an array of navigation items for the Fuse application.
 */
const navigationConfig: FuseNavItemType[] = [
	{
		id: 'apps',
		title: 'Applications',
		subtitle: 'LLM-powered applications',
		type: 'group',
		icon: 'heroicons-outline:cube',
		// translate: 'APPLICATIONS',
		children: [
			{
				id: 'apps.summarizer',
				title: 'Legal Summarization',
				type: 'item',
				icon: 'heroicons-outline:document-text',
				// url: '/apps/academy',
				url: '/apps/summarizer',
				// translate: 'SUMMARIZER'
			}
		]
	},
	{
		id: 'utils',
		title: 'Utilities',
		subtitle: 'Platform tools and utilities',
		type: 'group',
		icon: 'heroicons-outline:cube',
		// translate: 'UTILITIES',
		children: [
			{
				id: 'apps.tasks',
				title: 'Prompts',
				type: 'item',
				subtitle: '5 new prompts',
				icon: 'heroicons-outline:annotation',
				url: '/apps/tasks',
				// translate: 'FILE_MANAGER'
			},
			{
				id: 'apps.file-manager',
				title: 'File Manager',
				type: 'item',
				icon: 'heroicons-outline:cloud',
				url: '/apps/file-manager',
				end: true,
				// translate: 'FILE_MANAGER'
			}
		]
	}

];

export default navigationConfig;
