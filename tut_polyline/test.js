var polyline = require('polyline');

// returns an array of lat, lon pairs
console.log(polyline.decode('_p~iF~ps|U_ulLnnqC_mqNvxq`@'));

// returns a string-encoded polyline
console.log(polyline.encode([[38.5, -120.2], [40.7, -120.95], [43.252, -126.453]]));