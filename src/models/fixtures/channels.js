import fixture from 'can-fixture';

const store = fixture.store([{
  name: 0,
  description: 'First item'
}, {
  name: 1,
  description: 'Second item'
}]);

fixture({
  'GET api/channels': store.findAll,
  'GET api/channels/channels-api.js/{name}': store.findOne,
  'POST api/channels/channels-api.js': store.create,
  'PUT api/channels/channels-api.js/{name}': store.update,
  'DELETE api/channels/channels-api.js/{name}': store.destroy
});

export default store;
