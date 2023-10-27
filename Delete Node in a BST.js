var deleteNode = function(root, key) {
    return !root ? null : (root.val === key ? (root.left ? (root.right ? (root.right.left = root.left) : root.left) : root.right) : (key > root.val ? (root.right = deleteNode(root.right, key)) : (root.left = deleteNode(root.left, key))), root);
};
