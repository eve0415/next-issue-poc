import { registerOTel } from '@vercel/otel';

registerOTel({
  serviceName: 'test',
});
