var JSONDataConverter = require('./JSONDataConverter');

describe('JSONDataConverter', () => {
  it('converts an MCS Emotion API JSON response to a ChartJS data object', () => {
    var jsonData = JSON.parse('[{"faceRectangle":{"height":64,"left":85,"top":50,"width":64},"scores":{"anger":0.000008362581,"contempt":0.00023066772,"disgust":0.00000190693913,"fear":0.00000262125877,"happiness":0.0000301946984,"neutral":0.000008362581,"sadness":0.000635955657,"surprise":0.0000298200466}}]');
    var expectedObj = JSON.parse('{"labels":["anger","contempt","disgust","fear","happiness","neutral","sadness","surprise"],"datasets":[{"data":[0.000008362581,0.00023066772,0.00000190693913,0.00000262125877,0.0000301946984,0.000008362581,0.000635955657,0.0000298200466]}]}')
    expect(JSONDataConverter(jsonData)).toEqual(expectedObj);
  });

 it('fails if there is no argument', () => {
    expect(function(){JSONDataConverter()}).toThrow('Cannot convert data: missing JSON data object');
  });
});

var multi_face = JSON.parse('[{"faceRectangle":{"height":64,"left":92,"top":31,"width":64},"scores":{"anger":0.009464583,"contempt":0.00514136534,"disgust":0.009724874,"fear":0.8031377,"happiness":0.000654127041,"neutral":0.0181976222,"sadness":0.0309382882,"surprise":0.122741394}},{"faceRectangle":{"height":62,"left":177,"top":140,"width":62},"scores":{"anger":0.00000215679233,"contempt":0.0000374046977,"disgust":0.00018394916,"fear":0.000370120455,"happiness":0.00000117360321,"neutral":0.0122825429,"sadness":0.9870647,"surprise":0.0000579475636}},{"faceRectangle":{"height":60,"left":95,"top":142,"width":60},"scores":{"anger":7.343825e-12,"contempt":5.385228e-13,"disgust":2.74761359e-11,"fear":1.45800987e-13,"happiness":1,"neutral":9.537651e-11,"sadness":8.355963e-13,"surprise":1.77664927e-9}},{"faceRectangle":{"height":59,"left":11,"top":142,"width":59},"scores":{"anger":0.0000439515825,"contempt":0.0000055311184,"disgust":0.000263027323,"fear":0.00151374482,"happiness":0.000266454415,"neutral":0.000255819876,"sadness":0.00000316210958,"surprise":0.9976483}},{"faceRectangle":{"height":58,"left":12,"top":29,"width":58},"scores":{"anger":0.1422279,"contempt":0.05332158,"disgust":0.0277194921,"fear":0.00249316776,"happiness":0.06367651,"neutral":0.675339341,"sadness":0.0180415642,"surprise":0.017180413}},{"faceRectangle":{"height":54,"left":178,"top":37,"width":54},"scores":{"anger":0.3329236,"contempt":0.0297864527,"disgust":0.6240645,"fear":4.33214e-7,"happiness":0.000310403382,"neutral":0.0105729261,"sadness":0.00233596284,"surprise":0.00000568962969}}]')

  var totalAnger = 0
  var counter = 0
multi_face.forEach(function(object) {
    totalAnger += object.scores.anger;
    counter += 1;
    if (counter === multi_face.length) {
      averageAnger = totalAnger / multi_face.length;
    }
return averageAnger
  });

var sum = (0.009464583 + 0.00000215679233 + 7.343825e-12 + 0.0000439515825 + 0.1422279 + 0.3329236)



Object.values(multi_face[0].scores)  // returns object scores
});


var emotionAverages = {
  totalAnger: 0,
  totalContempt: 0,
  totalDisgust: 0,
};

multi_face.forEach(function(object, index) {
  if (index !== multi_face.length) {
    emotionAverages.totalAnger += object.scores.anger
    emotionAverages.totalContempt += object.scores.contempt
    emotionAverages.totalDisgust += object.scores.disgust
  }
  else {
     emotionAverages = {
      anger: emotionAverages.totalAnger / multi_face.length,
      contempt: emotionAverages.totalContempt / multi_face.length,
      disgust: emotionAverages.totalDisgust / multi_face.length,
    }
  };
});


var totals = multi_face.reduce(function(accumulatedTotals, object, num_faces) {
  Object.keys(object).forEach(function(key) {
    console.log(object)
    if (num_faces !== multi_face.length - 1) {
      // If we've already set a key we sum the new value, if not we set it
      accumulatedTotals[key] = accumulatedTotals[key] ? accumulatedTotals[key] + object[key] : object[key]
    } else {
      accumulatedTotals[key] = accumulatedTotals[key] + object[key] / multi_face.length
    }
  })
  return accumulatedTotals
})
