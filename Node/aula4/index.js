const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir)
    walk(files, rootDir);
}

async function walk(files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file)
        if(/\.git/.test(fileFullPath)) continue;
        if(/node_module/g.test(fileFullPath)) continue;
        
        const stats = await fs.stat(fileFullPath)
        
        if(stats.isDirectory()){
            readdir(fileFullPath);
            continue;
        }
        if(!/\.css/g.test(fileFullPath)) continue;
        console.log(fileFullPath, stats.isDirectory())
    }
}
readdir('/home/thomas/Documents/Codas/curso_de_Javascript_do_basico_ao_avancado/')
