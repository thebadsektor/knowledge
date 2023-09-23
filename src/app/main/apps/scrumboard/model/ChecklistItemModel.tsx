import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import { PartialDeep } from 'type-fest';

export type CheckListItemType = {
	id: number;
	name: string;
	checked: boolean;
};

function ChecklistItemModel(data: PartialDeep<CheckListItemType>) {
	data = data || {};

	return _.defaults(data, {
		id: FuseUtils.generateGUID(),
		name: '',
		checked: false
	});
}

export default ChecklistItemModel;
