// const os = require("os")

// console.log(os.platform())

// console.log(os.arch())

// console.log(os.hostname())
// console.log(os.version())

// console.log(os.uptime())
// console.log(os.totalmem()/1024/1024/1024)
// console.log(os.freemem()/1024/1024/1024)
// console.log(os.cpus())
// console.log(os.cpus().length)
const fs = require("fs")

// fs.writeFile("style.css","a {color:green};",(err)=>{
//     if(err) console.log(err)
//         else console.log("File Updated")
// })
// const data = {name:"Prachi Yadav",Age:19,state:"Haryana"}
// fs.writeFile("db.json",JSON.stringify(data,null,2),(err)=>{
//     if(err) console.log(err)
//         else console.log("File Written")
// })

// let newData = {name:"Krishna",Age:25,city:"Mumbai"}

// fs.readFile("db.json","utf8",(err,res)=>{
//     if(err) console.log(err)
//         else {
//     let temp = JSON.parse(res)

//     temp.push(newData)

//     fs.writeFile("db.json",JSON.stringify(temp,null,2),(err)=>{
//         if(err) console.log(err)
//             else console.log("File Updated")
//     }
//     )
    
//             console.log(res)
//         }
// }
// )

// fs.appendFile("data.txt" ,"\n3rd Sem",(err)=>{
//     if(err)console.log(err)
//         else console.log("File Updated")
// })

// fs.unlink("style.css",(err)=>{
//     if(err) console.log(err)
//         else console.log("File Deleted Successsfully")
// })

const path = require("path")

const file = path.join("home","data","user.json")

console.log(file)

// console.log(path.dirname("home/user/data/file.txt"))
// // console.log(path.basename("home/user/data/file.txt"))
// console.log(path.extname("home/user/data/file.txt"))

const filepath = path.join("home","data","user","file.text")
console.log(filepath)

fs.mkdir(path.dirname(filepath),{recursive:true},(err)=>{
    if(err) {
        console.log(err)

    } else {
        fs.writeFile(filepath, "Hello World",(err)=>{
            if (err) {
                console.log(err);
            } else {
                console.log("File Written");
            }
        });
    }
});
 
//  const crypto = require("crypto")

//  let password1 = "Shadav@1234"
//  let password2 = "Shadav@1235"

//  let encrypt =crypto.createHash("sha256").update(password1).
//  digest("hex")
//   let encrypt =crypto.createHash("sha256").update(password2).
//  digest("hex")

//  console.log(encrypt,"\n",encrypt2)
// const dns = require("dns")

// dns.lookup("google.com",(err,address,family)=>{
//     console.log(address)
//     console.log(family)
// })