const fs = require ('fs')
const path = require ('path')
const fileExtensionsArr = []

fs.readdir('./AllSkyFree',(err,file)=>{
    if (err) throw error
    for (let i = 0; i < file.length; i++) {
        const fileExt = path.extname(file[i])
        if (!fileExtensionsArr.includes(fileExt)){
            fileExtensionsArr.push(fileExt)
        }   ;
    }
    console.log(fileExtensionsArr)
    makeFolder(fileExtensionsArr)
    sortFolder(file)



})

function makeFolder(Array) {
    Array.forEach(ext=>{
        const folderName = ext.substring(1) || 'no extension'
        const pathName = `./AllSkyFree/${folderName} Folder`
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
        const oldPath = path.join("./AllSkyFree",file)
        const newPath = path.join("./AllSkyFree",`${folderName} Folder`,file)
        fs.rename(oldPath,newPath,err=>{
            if (err){
                console.log("error moving file",err)
            }
        })

    })
}