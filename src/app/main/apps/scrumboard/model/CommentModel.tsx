import FuseUtils from '@fuse/utils';
import getUnixTime from 'date-fns/getUnixTime';
import _ from '@lodash';
import { PartialDeep } from 'type-fest';

export type CommentType = {
	id: string;
	type: string;
	idMember: string;
	message: string;
	time: number;
};

export type CommentsType = CommentType[];

function CommentModel(data: PartialDeep<CommentType>) {
	data = data || {};

	return _.defaults(data, {
		id: FuseUtils.generateGUID(),
		type: 'comment',
		idMember: null,
		message: '',
		time: getUnixTime(new Date())
	});
}

export default CommentModel;
