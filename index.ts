Bun.serve({
	port: 8000,
	async fetch(req: Request) {
		const url = new URL(req.url);
		const requestIp = require('request-ip');
		const requestData = {
			ip: requestIp.getClientIp(req),
			url: req.url,
			method: req.method,
			headers: req.headers,
			body: req.method === 'GET' ? null : await req.json(), // Parse body for non-GET requests
		};
		switch (url.pathname) {
			case '/':
				return new Response('Hello World!', {
					headers: { 'Content-Type': 'text/plain' },
				});
				break;
			default:
				return new Response(JSON.stringify(requestData, null, 2), {
					headers: { 'Content-Type': 'application/json' },
				});
				break;
		}
	},
});