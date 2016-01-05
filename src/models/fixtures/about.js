import fixture from 'can-fixture';

const store = fixture.store([{
  name: 0,
  description: 'First item'
}, {
  name: 1,
  description: 'Second item'
}]);

fixture({
  'GET api/about': store.findAll,
  'GET api/about/{name}': store.findOne,
  'POST api/about': store.create,
  'PUT api/about/{name}': store.update,
  'DELETE api/about/{name}': store.destroy
});

export default store;
