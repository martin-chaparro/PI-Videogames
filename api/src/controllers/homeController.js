const getHome = async (request, response) => {
	response.json({
		msg: 'Home Controller - Works',
	});
};

module.exports = {
	getHome,
};
