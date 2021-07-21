const cors_proxy = require('cors-anywhere')
require('dotenv').config()

const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || '127.0.0.1'

try {
	cors_proxy
		.createServer({
			removeHeaders: ['cookie', 'cookie2'],
		})
		.listen(PORT, HOST, () => {
			;`Server is working on ${HOST}:${PORT}`
		})
} catch (e) {
	console.log(e)
}
