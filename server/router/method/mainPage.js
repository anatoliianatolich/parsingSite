const mainPage = (req, res, next) => {
    res.render('mainPage', {
        title: "Rozetka"
    })
}

module.exports = mainPage;
