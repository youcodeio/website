import fixture from 'can-fixture';

const store = fixture.store([{
  name: 0,
  description: 'First item'
}, {
  name: 1,
  description: 'Second item'
}]);

fixture({
  'GET api/search': store.findAll,
  'GET api/search/{name}': store.findOne,
  'POST api/search': store.create,
  'PUT api/search/{name}': store.update,
  'DELETE api/search/{name}': store.destroy
});

export default store;
