import Redis from 'ioredis';
import config from '../../config/config';

// eslint-disable-next-line import/prefer-default-export
export const redis = new Redis(config.redisUrl);
