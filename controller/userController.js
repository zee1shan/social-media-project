module.exports.profile=(re,rs)=>{
    return rs.end("<h1>user ki profile dekh ke kya ukhad loge</h1>")
}
module.exports.home=(re,rs)=>{
    return rs.render("user",{
        title:'zeeshan'
    })
}