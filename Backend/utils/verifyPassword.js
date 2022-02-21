const bcrypt = require("bcrypt");

module.exports = async (password, hash) => {
	if (!password) {
		throw new Error("Password not entered");
	}

	try {
		const verifiedPassword = await bcrypt.compare(password, hash);

		if (!verifiedPassword) {
			return false;
		}
		return verifiedPassword;
	} catch (error) {
		console.log(error);
		return false;
	}
};
