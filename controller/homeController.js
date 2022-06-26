module.exports.home=(re,rs)=>{
  return  rs.render('home',{
    title:"home lnder"
  })
}
module.exports.about=(re,rs)=>{
    return rs.end("<h1>My name is lakhan</h1>")
}