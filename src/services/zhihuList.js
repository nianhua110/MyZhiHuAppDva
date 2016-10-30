'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.query = query;

var _request = require('../utils/request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function query() {
    var obj = (0, _request2.default)('http://news-at.zhihu.com/api/4/news/latest');
    console.log(obj);
    return obj;
} /**
   * Created by kyle on 16-10-22.
   */

//# sourceMappingURL=zhihuList.js.map