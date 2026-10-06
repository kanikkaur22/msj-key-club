# Local preview server that tells the browser never to cache, so edits always show up.
# Run: python3 serve.py   then open http://localhost:5180
import http.server, functools

class NoCache(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        super().end_headers()

http.server.ThreadingHTTPServer(("", 5180), functools.partial(NoCache, directory=".")).serve_forever()
