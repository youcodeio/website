import can from 'can';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';
import 'can/map/define/define';

export const Search = can.Map.extend({
  define: {}
});

Search.List = can.List.extend({
  Map: Search
}, {});

export const searchConnection = superMap({
  url: 'http://localhost:8080/src/api/search/search-api.js',
  idProp: 'name',
  Map: Search,
  List: Search.List,
  name: 'search'
});

tag('search-model', searchConnection);

export default Search;
