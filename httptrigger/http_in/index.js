module.exports = async function (context, req) {

    let version = "v2.0.0"

    context.log('HTTP trigger function processed a request. VERSION=%s REQUEST=%s',version,req.originalUrl);

    const responseMessage = "VERSION " + version;

    context.res = {
        // status: 200
        body: responseMessage
    };
    
}
