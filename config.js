{
  port: 8125,
  flushInterval: Number(process.env.FLUSH_INTERVAL || 10000),
  backends: [ "./backends/statsd-cloudwatch-backend" ],
  deleteIdleStats: true,
  cloudwatch: {
    namespace:  process.env.CLOUDWATCH_NAMESPACE || 'docker',
    region: process.env.AWS_REGION || 'us-east-1',
    accessKeyId:  process.env.AWS_KEY_ID,
    secretAccessKey: process.env.AWS_KEY,
    processKeyForNamespace: true
  }
}
