import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

export default class DateUtils {
  static getCommentTime = (creationTime: number | undefined) => {
    if (creationTime) {
      dayjs.extend(relativeTime);
      const unitCreationDate = dayjs.unix(creationTime);
      return dayjs(unitCreationDate).fromNow();
    }
    return undefined;
  };
}
