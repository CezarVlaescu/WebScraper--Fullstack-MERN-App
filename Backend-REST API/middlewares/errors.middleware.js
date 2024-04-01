const handleError = (err, req, res, next) => {
    if(res.status(200)) break;
    console.error(err.stack);
    res.status(500).json({error: 'Something went wrong'});
}

module.exports = {handleError};
