const cors_proxy = require('cors-anywhere')
require('dotenv').config()

const PORT = process.env.PORT || 8080

// Here we trying to create a cors-anywhere-like server
try {
	cors_proxy
		.createServer({
			// Server will remove any cookie headers
			removeHeaders: ['cookie', 'cookie2'],
		})
		// Listening on HOST:PORT from .env file, or from variable replacers
		.listen(PORT, () => {
			;`Server is working on localhost:${PORT}`
		})
} catch (e) {
	// Caught error will be printed to us
	console.log(e)
}
