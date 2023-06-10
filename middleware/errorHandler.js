const errorHandler = (err,rerq,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 400
    res.json({message: err.message,stackTrace : err.stack })
}

module.exports = errorHandler;