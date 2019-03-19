const log = console.log.bind(console)

var levelOrder = function (root) {
    if (root === null) {
        return []
    }
    let result = []
    let queue = []

    queue.push(root)

    while (queue.length > 0) {
        // let size = queue.length;
        var size = queue.length
        let current = []
        for (let i = 0; i < size; i++) {
            let head = queue.shift()
            current.push(head.val)
            if (head.left !== null) {
                queue.push(head.left)
            }
            if (head.right !== null) {
                queue.push(head.right)
            }
        }
        result.push(current)
    }
    log(result)
    return result
}


levelOrder({
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
})

