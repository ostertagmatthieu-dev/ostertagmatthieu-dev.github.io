#!/usr/bin/env python3
"""Keep the Content-Security-Policy script hash of index.html in sync with its inline script.

The page's CSP only lets the browser run the inline <script> whose SHA-256 is listed in the
meta tag. Any edit to that script (a translation, a link...) changes the hash, so run:

    python3 tools/csp.py          # rewrite the hash in index.html
    python3 tools/csp.py --check  # exit 1 if the hash is stale (used by the CI workflow)
"""
import base64
import hashlib
import pathlib
import re
import sys

page = pathlib.Path(__file__).resolve().parent.parent / "index.html"
html = page.read_text(encoding="utf-8")

# Executable inline scripts are the attribute-less ones; JSON-LD has a type and is not executed.
without_comments = re.sub(r"<!--.*?-->", "", html, flags=re.S)
scripts = re.findall(r"<script>(.*?)</script>", without_comments, re.S)
if len(scripts) != 1:
    sys.exit(f"expected exactly one inline <script>, found {len(scripts)}")

digest = base64.b64encode(hashlib.sha256(scripts[0].encode("utf-8")).digest()).decode()
wanted = f"'sha256-{digest}'"

match = re.search(r"script-src ('sha256-[A-Za-z0-9+/=]+'|'sha256-PLACEHOLDER')", html)
if not match:
    sys.exit("no script-src hash found in the CSP meta tag")

if match.group(1) == wanted:
    print("CSP hash is up to date:", wanted)
    sys.exit(0)
if "--check" in sys.argv:
    print("CSP hash is stale: run `python3 tools/csp.py` and commit index.html", file=sys.stderr)
    sys.exit(1)

page.write_text(html.replace(match.group(1), wanted, 1), encoding="utf-8")
print("CSP hash updated:", wanted)
