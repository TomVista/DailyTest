const BinaryTreeNode = require('./BinaryTreeNode')

class BinaryTree {
    /**
     * 
     * @param {*} arr 
     * @param {"complete"|"serach"} type 
     */
    constructor(arr, type) {
        let head
        switch (type) {
            case "complete":
                head = this.completeBinaryTree(arr)
                break
            case "serach":
                head
                break
            default:
                throw new Error('type is illegal')
                break
        }
        this.head = head
    }
    completeBinaryTree (arr) {

    }
}

module.exports = BinaryTree