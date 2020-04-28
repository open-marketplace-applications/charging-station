const ps = require('python-shell');
const sh = require('shelljs');

const runJavascript = function (path) {
    return new Promise((resolve, reject) => {

        const js = require(path);

        resolve(js.run())

    });
}

const runPython = function (path) {
    return new Promise((resolve, reject) => {
        ps.PythonShell.run(path, {}, (err, results) => {
            if (err) reject(err);
            resolve(results[0])
        });
    })
}

const runShell = function (path) {
    return new Promise((resolve, reject) => {
        const { stdout, stderr, code } = sh.exec(path, { silent: true })
        console.log("stdout", stdout)
        console.log("stderr", stderr)
        console.log("code", code)

        resolve(stdout)
    })
}

const runRust = function (path) {
    return new Promise((resolve, reject) => {
        const { stdout, stderr, code } = sh.exec(path, { silent: true })
        console.log("stdout", stdout)
        console.log("stderr", stderr)
        console.log("code", code)

        resolve(stdout)
    })
}

const runCustomScript = function (path) {
    return new Promise((resolve, reject) => {

        const js = require(path);

        resolve(js.run())

    });
}

module.exports = {
    runJavascript,
    runPython,
    runShell,
    runRust,
    runCustomScript
}