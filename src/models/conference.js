import can from 'can';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';
import 'can/map/define/define';

export const Conference = can.Map.extend({
  define: {}
});

Conference.List = can.List.extend({
  Map: Conference
}, {});

export const conferenceConnection = superMap({
  url: 'http://localhost:8080/src/api/conferences/conferences-api.js',
  idProp: 'name',
  Map: Conference,
  List: Conference.List,
  name: 'conference'
});

tag('conference-model', conferenceConnection);

export default Conference;
