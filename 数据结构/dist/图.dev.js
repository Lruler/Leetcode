"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Graph =
/*#__PURE__*/
function () {
  function Graph() {
    var isDirected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, Graph);

    this.isDirected = isDirected; //是否有向

    this.vertices = []; // 点集

    this.adjList = new Map(); // 边集————邻接表
  } // 添加新定点


  _createClass(Graph, [{
    key: "addVertex",
    value: function addVertex(v) {
      if (!this.vertices.includes(v)) {
        this.vertices.push(v);
        this.adjList.set(v, []);
      }
    } // 添加边

  }, {
    key: "addEdge",
    value: function addEdge(v, w) {
      if (!this.adjList.get(v)) {
        this.addVertex(v);
      }

      if (!this.adjList.get(w)) {
        this.addVertex(w);
      }

      this.adjList.get(v).push(w);

      if (!this.isDirected) {
        this.adjList.get(w).push(v);
      }
    } // 返回点集

  }, {
    key: "getVertices",
    value: function getVertices() {
      return this.vertices;
    } // 返回邻接表

  }, {
    key: "getAdjList",
    value: function getAdjList() {
      return this.adjList;
    } // 字符化

  }, {
    key: "toString",
    value: function toString() {
      var s = '';

      for (var i = 0; i < this.vertices.length; i++) {
        s += "".concat(this.vertices[i], " -> ");
        var neighbors = this.adjList.get(this.vertices[i]);

        for (var j = 0; j < neighbors.length; j++) {
          s += "".concat(neighbors[j], " ");
        }

        s += "\n";
      }

      return s;
    }
  }]);

  return Graph;
}();

var garph = new Graph();
var ver = ['A', 'B', 'C', 'D', 'E'];

for (var i = 0; i < ver.length; i++) {
  garph.addVertex(ver[i]);
}

garph.addEdge('A', 'B');
garph.addEdge('A', 'C');
garph.addEdge('A', 'E');
garph.addEdge('B', 'D');
garph.addEdge('C', 'E');
garph.addEdge('C', 'D');
garph.addEdge('D', 'E');
console.log(garph.toString());