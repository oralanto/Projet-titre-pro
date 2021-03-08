const isLoggedIn = (request, response, next) => {
    if(request.session.isLogged) {
        next();
    } else {
        response.status(403).json('You must be connected to access this page');
    }
}

module.exports = {
    isLoggedIn
}