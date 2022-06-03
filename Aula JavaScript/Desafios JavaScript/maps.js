const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const userRoles = new Map();

userRoles.set('Ian', 'SUDO');
userRoles.set('Matheus', 'ADMIN');
userRoles.set('Sthepany', 'ADMIN');
userRoles.set('Santander', 'USER');
userRoles.set('Dio', 'USER');

console.log(getAdmins(userRoles));