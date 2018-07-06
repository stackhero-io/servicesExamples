const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
  host: [
    {
      host: 'XXXXXX.stackhero-network.com', // This is the host you'll find on Stackhero's console
      auth: 'admin:<yourPassword>', // This is the password you've defined on Stackhero's console
      protocol: 'https',
      port: 9200
    }
  ],
  log: 'trace' // Enable debug logs
});

(async () => {
  console.log('Try to ping Elasticsearch');
  await client.ping({ requestTimeout: 1000 });
  console.log('Ping is OK :)');

  console.log('All done, your Elasticsearch is up and running :)');
})();
