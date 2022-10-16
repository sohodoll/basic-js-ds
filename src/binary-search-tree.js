const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}


class BinarySearchTree {

  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    const node = this.treeRoot;
    if (node === null) {
      this.treeRoot = new Node(data);
      return;
    } else {
      const addTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          }else if (node.left !== null) {
            return addTree(node.left);
            }
        } else if (data > node.data) {
            if (node.right === null) {
              node.right = new Node(data);
              return;
            } else if (node.right !== null) {
               return addTree(node.right);
            }
        } else {
          return null;
        }
      };
      return addTree(node);
    }
  }

  has(data) {
    let current = this.treeRoot;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current  = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  find(data) {
    let current = this.treeRoot;
    while (current.data !== data) {
      if (data < current.data) {
        current  = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  remove(data) {
    const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        if (node.left == null && node.right == null) {
          return null;
        }
        if (node.left == null) {
          return node.right;
      }
        if (node.right == null) {
          return node.left;
      }
        let temp = node.right;
        while (temp.left !== null) {
        temp = temp.left;
      }
        node.data = temp.data;
        node.right = removeNode(node.right, temp.data);
        return node;
    }
      else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.treeRoot = removeNode(this.treeRoot, data);
  }

  min() {
    let current = this.treeRoot;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    let current = this.treeRoot;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};