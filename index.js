const { error } = require('console')
const fs = require ('fs')
const path = require ('path')
const fileExtensionsArr = []

fs.readdir('./AllSkyFree',(err,file)=>{
    if (err) throw error
    for (let i = 0; i < file.length; i++) {
        const fileExt = path.extname(file[i])
        if (!fileExtensionsArr.includes(fileExt)){
            fileExtensionsArr.push(fileExt)
        }   
    }
    console.log(fileExtensionsArr)
    makeFolder(fileExtensionsArr)
    sortFiles(file)


})

function makeFolder(Array) {
    for (let i = 0; i < Array.length; i++) {
        const purename = Array[i].replace('.',' ')
        fs.mkdir(`./AllSkyFree/${purename} Folder`,{recursive:true},(err)=>{
            if (err) throw err
        })
        console.log(Array[i]);   
    }
}

function sortFiles(files){
    console.log(files)
    files.forEach(file => {
        fs.rename(``,``) 
    });
}