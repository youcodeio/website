import can from 'can';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';
import 'can/map/define/define';

export const Channels = can.Map.extend({
  define: {}
});

Channels.List = can.List.extend({
  Map: Channels
}, {});

export const channelsConnection = superMap({
  url: 'http://localhost:8080/src/api/channels/channels-api.js',
  idProp: 'name',
  Map: Channels,
  List: Channels.List,
  name: 'channels'
});

tag('channels-model', channelsConnection);

export default Channels;
