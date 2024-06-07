import { FilterType } from '../constants';
import { isPointFuture, isPointPast, isPointPresent } from './point';

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => isPointFuture(point.dateFrom)),
  [FilterType.PAST]: (points) => points.filter((point) => isPointPast(point.dateTo)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isPointPresent(point.dateFrom, point.dateTo))
};

export { filter };
