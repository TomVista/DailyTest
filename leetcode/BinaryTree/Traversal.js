// 二叉树遍历

const BinaryTreeNode = require('./BinaryTreeNode')

// 前序遍历

/**
 * 前序遍历递归实现
 * @param {BinaryTreeNode} node 
 * @param {Array<BinaryTreeNode>} nodeArr
 */
function preorderTraversal (node, nodeArr) {
    if (!nodeArr.length) {
        nodeArr = []
    }
    nodeArr.push(node)
    if (node.left) {
        preorderTraversal(node.left, nodeArr)
    }
    if (node.right) {
        preorderTraversal(node.right, nodeArr)
    }
    return nodeArr
}

// 中序遍历
// 后序遍历
// 层序遍历