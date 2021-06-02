const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')

class server {
    constructor() {
        this._stack = []
        this.loc = process.cwd()
    }
    use(type, ...args) {
        if (type === 'files') {
            this.files = path.join(this.loc, args[0])
            console.log(this.files)
        }
    }
    listen(port, callback) {
        const handler = (req, res) => {
            this.handle(req, res, err => {
                if (err) {
                    res.writeHead(500)
                    res.end('Internal Server Error')
                }
            })
        }
        return http.createServer(handler).listen({ port }, callback)
    }
    onGet(loc, callback) {
        this._stack.push({loc: loc, callback: callback})
    }
    handle(req, res, callback) {
        for (var i=0;i < this._stack.length;i++) {
            if (req.url === this._stack[i].loc) {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                res = customRes(res, this)
                let ctx = {req: req, res: res}
                return this._stack[i].callback(ctx)
            } else {
                console.log(req.url)
                fs.readdir(this.loc, (err, files) => {
                    if (err) {
                        console.error(err)
                    }
                    let di = files
                    for (var l=0;l < di.length;l++) {
                        if (req.url === di[l]) {
                            //res.setHeader('Content-Type', 'text/html')
                            //res = customRes(res, this)
                            res.statusCode = 200
                            fs.readFile(th.loc + "/" + di[l], function(err, data) {
                                if (err) {
                                    console.error(err)
                                }
                                t.send(data)
                            })
                        } else {
                            res.statusCode = 400
                        }
                    }
                })
            }
        }
        function customRes(res, th) {
            res.send = function (data) {
                this.end(data)
            }
            res.sendFile = function (file) {
                let t = this
                fs.readFile(th.loc + "/" + file, function(err, data) {
                    if (err) {
                        console.error(err)
                    }
                    t.send(data)
                })
            }
            return res
        }
    }
}

module.exports.server = server