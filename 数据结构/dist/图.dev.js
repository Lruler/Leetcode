"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2
};

var initColor = function initColor(vertices) {
  var color = {};

  for (var i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }

  return color;
};

var logVer = function logVer(v) {
  return console.log("The vertex:" + v);
}; // 广度优先 BFS


var BFS = function BFS(graph, startVertex, callback) {
  var vertices = graph.getVertices();
  var adjList = graph.getAdjList();
  var color = initColor(vertices);
  var queue = [];
  queue.push(startVertex);

  while (queue.length !== 0) {
    var u = queue.shift();
    var neighbors = adjList.get(u);
    color[u] = Colors.GREY;

    for (var i = 0; i < neighbors.length; i++) {
      var w = neighbors[i];

      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        queue.push(w);
      }
    }

    color[u] = Colors.BLACK;

    if (callback) {
      callback(u);
    }
  }
}; // 深度优先 DFS


var DFS = function DFS(graph, callback) {
  var vertices = graph.getVertices();
  var adjList = graph.getAdjList();
  var color = initColor(vertices);

  for (var i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      DFSV(vertices[i], color, adjList, callback);
    }
  }
};

var DFSV = function DFSV(u, color, adjList, callback) {
  color[u] = Colors.GREY;
  if (callback) callback(u);
  var neighbors = adjList.get(u);

  for (var i = 0; i < neighbors.length; i++) {
    var w = neighbors[i];

    if (color[w] === Colors.WHITE) {
      DFSV(w, color, adjList, callback);
    }
  }

  color[u] = Colors.BLACK;
};

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

var graph = new Graph();
var ver = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (var i = 0; i < ver.length; i++) {
  graph.addVertex(ver[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
BFS(graph, ver[0], logVer);
DFS(graph, logVer);