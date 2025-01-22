const requestIp = require('request-ip');

Bun.serve({
	port: 8000,
	async fetch(req: Request) {
		const url = new URL(req.url);
		// Extract relevant data from the request
		const requestData = {
			ip: requestIp.getClientIp(req),
			url: req.url,
			method: req.method,
			headers: req.headers,
			body: req.method === 'GET' ? null : await req.json(), // Parse body for non-GET requests
		};
		// Return the extracted data as a JSON response
		return new Response(JSON.stringify(requestData, null, 2), {
			headers: { 'Content-Type': 'application/json' },
		});
	},
});