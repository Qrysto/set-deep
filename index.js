exports.default = function get(obj) {

	if (!obj) return obj;

	var props = [];
	for (var i = 1; i < arguments.length; i++) {
		Array.prototype.push.apply(props, resolvePath(arguments[i]));
	}

	return function(value) {
		for (i = 0; i < props.length; i++) {
			var prop = props[i];

			if (i === props.length - 1) {
				obj[prop] = value;
			} else {
				if (!obj[prop]) {
					obj[prop] = {};
				}
				obj = obj[prop];
			}
		}

		return obj;
	}
}

module.exports = exports.default;

function resolvePath(path) {
	var props = [];

	if (typeof path === 'string') props = path.split('.');

	if (typeof path === 'number') props = [path];

	if (Array.isArray(path)) {
		for (var i = 0; i < path.length; i++) {
			Array.prototype.push.apply(props, resolvePath(path[i]));
		}
	}

	return props;
}