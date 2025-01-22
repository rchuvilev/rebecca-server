Bun.serve({
	port: 8000,
	fetch(req: Request) {
		const url = new URL(req.url);
		if (url.pathname === '/') {
			return new Response('Hello World!');
		}
		return new Response('Not Found', { status: 404 });
	},
});
