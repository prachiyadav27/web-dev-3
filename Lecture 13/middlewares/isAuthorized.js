const isAuthorized = (req,res,next)=>{
    let token = req.headers.cookie;

    if((!token) || (token!=123987)){
        return res.status(401).send("abey tu kon h")
    }
    next()



}

const isloggedIn = (req,res,next)=>{
    let login = true;

    if(!login){
        return res.status(401).send("abey tu fir aagya ")
    }
    next()
}

module.exports = {isAuthorized,isloggedIn}