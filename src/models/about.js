import can from 'can';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';
import 'can/map/define/define';

export const About = can.Map.extend({
  define: {}
});

About.List = can.List.extend({
  Map: About
}, {});

export const aboutConnection = superMap({
  url: 'http://localhost:8080/src/api/about/about-api.js',
  idProp: 'name',
  Map: About,
  List: About.List,
  name: 'about'
});

tag('about-model', aboutConnection);

export default About;
