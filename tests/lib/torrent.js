import fs from '../lib/fs';

function readySeed() {
    console.log('torrent readySeed  start -----------------');
    const ss = new fs.Shell();
    var fileContent = 'main test';
    var fileContent2 = 'directory test';
    var filepath = '/testFile.txt';
    var dirpath = '/test';
    var dirfile = '/dirFile.txt';

    fs.writeFile(filepath, fileContent, err => {
        if (err) {
            writeError(err, filepath);
            return false;
        }
        console.log('filepath create');
    });

    ss.mkdirp(dirpath, err => {
        if (err) {
            writeError(err, dirpath);
            return false;
        } else {
            console.log('dirpath created');
        }
    });

    fs.writeFile(dirpath + dirfile, fileContent2, err => {
        if (err) {
            writeError(err, dirpath + dirfile);
            throw err;
        }
        console.log('dirfile created');
    });

    return true;
}

module.exports = readySeed;

function readyDownload() {
    console.log('torrent readySeed  start -----------------');
    fs.stat('/textFile.txt', function(err, stat) {
        console.log(stat);
        console.log(err);
        if (err == null) {
            console.log('File exists!');
            //return true;
        } else if (err.code == 'ENOENT') {
            console.log('Error!');
            console.error(err.stat);
            return false;
        } else {
            console.log('Some other error: ', err.code);
            return false;
        }
    });

    fs.stat('/test/dirFile.txt', function(err, stat) {
        console.log(stat);
        console.log(err);
        if (err == null) {
            console.log('File exists!');
            //return true;
        } else if (err.code == 'ENOENT') {
            console.log('Error!');
            console.error(err.stat);
            return false;
        } else {
            console.log('Some other error: ', err.code);
            return false;
        }
    });
    return true;
}

module.exports = readyDownload;
