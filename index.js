const cors_proxy = require('cors-anywhere')
require('dotenv').config()

const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || '127.0.0.1'

// Here we trying to create a cors-anywhere-like server
try {
	cors_proxy
		.createServer({
			// Server will remove any cookie headers
			removeHeaders: ['cookie', 'cookie2'],
		})
		// Listening on HOST:PORT from .env file, or from variable replacers
		.listen(PORT, HOST, () => {
			;`Server is working on ${HOST}:${PORT}`
		})
} catch (e) {
	// Caught error will be printed to us
	console.log(e)
}
