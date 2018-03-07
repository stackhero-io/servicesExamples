const r = require('rethinkdbdash')({
  host: 'XXXXXX.stackhero-network.com', // This is the host you'll find on Stackhero console
  port: 29015,
  user: 'admin',
  password: 'XXXXXXXXXXXXX', // This is the admin password you've defined on Stackhero console
  ssl: true,
  silent: true
});

(async () => {

  console.log('Getting list of tables');
  const tables = await r.tableList();

  if (tables.length) {
    console.log('The server has those tables: ' + tables.join());
  }

  if (tables.indexOf('datasTest') === -1) {
    console.log('Creating table "datasTest"');
    await r.tableCreate('datasTest').run();
  }

  console.log('Inserting datas into table datasTest');
  await r.table('datasTest')
    .insert({ test: 'ok' })
    .run();

  console.log('Getting datas in table datasTest');
  const datas = await r.table('datasTest').run();
  console.log(datas);

  console.log('Close connection');
  r.getPoolMaster().drain();

  console.log('All done, your RethinkDB is up and running :)');
})();

