import { createApiAction, generateApiAction } from '../utils/api';

export const UPSERT = generateApiAction('MATCH_UPSERT');

const upsert = createApiAction(UPSERT);

export default {
  upsert,
};
