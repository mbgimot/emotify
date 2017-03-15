// import React from 'react';
// import ReactDOM from 'react-dom';
// import { shallow, mount, render } from 'enzyme';
var JSONDataConverter = require('./JSONDataConverter');

describe('JSONDataConverter', () => {
  it('converts an MCS Emotion API JSON response to a ChartJS data object', () => {
    var jsonData = JSON.parse('[{"faceRectangle":{"height":64,"left":85,"top":50,"width":64},"scores":{"anger":0.000008362581,"contempt":0.00023066772,"disgust":0.00000190693913,"fear":0.00000262125877,"happiness":0.0000301946984,"neutral":0.000008362581,"sadness":0.000635955657,"surprise":0.0000298200466}}]');
    var dataObj = JSONDataConverter(jsonData);
    // store the expectedObj
    expect(dataObj.labels).toContain('anger'); // test that dataObj === expectedObj 
  });

  it('fails if there is no argument', () => {
    expect(function(){JSONDataConverter()}).toThrow('Cannot convert data: missing JSON data object');
  });
});
