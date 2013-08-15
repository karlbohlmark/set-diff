module.exports = difference

function has (iterable, item) {
	return iterable.indexOf(item) != -1
}

function difference(base, subtract) {
	var diff = []

	base.forEach(function (item) {
		if (!has(subtract, item)) {
			diff.push(item)
		}
	})
	
	return diff
}