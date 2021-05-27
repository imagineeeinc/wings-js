const http = require('http')

class server {
    constructor() {
        this._stack = []
    }
    listen(port, callback) {
        const handler = (req, res) => {
            this.handle(req, res, err => {
                if (err) {
                    res.writeHead(500);
                    res.end('Internal Server Error');
                }
            })
        }
        return http.createServer(handler).listen({ port }, callback)
    }
    onGet(loc, callback) {
        this._stack.push({loc: loc, callback: callback})
        console.log(this._stack)
    }
    handle(req, res, callback) {
        console.log(req.path)
        //res.setHeader("Content-Type", "text/csv");
        //res.setHeader("Content-Disposition", "attachment;filename=oceanpals.csv")
    }
}

module.exports.server = server