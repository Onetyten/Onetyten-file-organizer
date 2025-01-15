const fs = require ('fs')
const path = require ('path')
const fileExtensionsArr = []

fs.readdir(__dirname,(err,file)=>{
    if (err) throw error
    for (let i = 0; i < file.length; i++) {
        const fileExt = path.extname(file[i])
        if (!fileExtensionsArr.includes(fileExt) && fileExt!== '.js'&& fileExt!== '.jsx'&& fileExt!== '.tsx'){
            fileExtensionsArr.push(fileExt)
        }   
    }
    console.log(fileExtensionsArr)
    makeFolder(fileExtensionsArr)
    sortFolder(file)



})

function makeFolder(Array) {
    Array.forEach(ext=>{
        const folderName = ext.substring(1) || 'no extension'
        // const pathName = `./AllSkyFree/${folderName} Folder`
        const pathName = path.join(__dirname,`${folderName} Folder`)
        if( !fs.existsSync(pathName)){
            fs.mkdir(pathName,{recursive:true},(err)=>{
                if (err) {
                    console.log('error creating folder',err)
                }
            })
        }
        
    })
}

function sortFolder(files){
    files.forEach(file =>{
        const fileExt = path.extname(file)
        const folderName = fileExt.substring(1)
        const folderPath = path.join(__dirname,`${folderName} Folder`)
        const oldPath = path.join(__dirname,file)
        const newPath = path.join(folderPath,file)
        if (fs.existsSync(folderPath))
        {
            fs.rename(oldPath,newPath,err=>{
                if (err){
                    console.log("error moving file",err)
                }
            })
        }
        else{
            if (!fs.existsSync(path.join(__dirname,`no extension Folder`))){
                fs.mkdir(path.join(__dirname,`extension Folder`),{recursive:true},(err)=>{
                    if (err) {
                        console.log('error creating extension folder',err)
                    }
                })
            }
            fs.rename(oldPath,path.join(__dirname,`extension Folder`,file),err=>{
                if (err){
                    console.log("error moving file",err)
                }
            }) 
        }
        

    })
}