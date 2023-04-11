const ErrorHandler=(err, req,res) =>
{
    const statusCode=res.statusCode === 200 ? 500: statusCode
    res.status(statusCode)
    res.json({
        message:err.message,
        stack :process.env.MODE_ENV ==="proudction"?null:err.stack

    })
}
module.exports = ErrorHandler