const getHome = async (request, response) => {
	response.send({
		msg: 'Home Controller - Works',
	});
};

module.exports = {
	getHome,
};
