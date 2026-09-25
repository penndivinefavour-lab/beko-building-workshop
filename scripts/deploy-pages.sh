#!/usr/bin/env bash
#
# Publish the production build to the `gh-pages` branch, which GitHub Pages
# serves at https://penndivinefavour-lab.github.io/beko-building-workshop/
#
# Usage:
#   ./scripts/deploy-pages.sh              # build + publish
#   ./scripts/deploy-pages.sh --skip-build # publish the existing dist/
#
# The build runs with VITE_BASE_PATH set to the Pages subpath so that asset
# URLs resolve correctly under /beko-building-workshop/. Run `npm run build`
# (not this script) when you need a root-relative build for another host.
#
# Requires push access to origin. No secrets are stored in this repository.

set -euo pipefail

REPO_SLUG="penndivinefavour-lab/beko-building-workshop"
BASE_PATH="/beko-building-workshop/"
BRANCH="gh-pages"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
cd "${PROJECT_ROOT}"

SKIP_BUILD=0
[[ "${1:-}" == "--skip-build" ]] && SKIP_BUILD=1

if [[ "${SKIP_BUILD}" -eq 0 ]]; then
  echo "==> Type-checking and building for ${BASE_PATH}"
  VITE_BASE_PATH="${BASE_PATH}" npm run build
fi

if [[ ! -f dist/index.html ]]; then
  echo "ERROR: dist/index.html not found. Run the build first." >&2
  exit 1
fi

if [[ ! -f dist/.nojekyll ]]; then
  echo "==> Adding .nojekyll (GitHub Pages would otherwise filter hashed assets)"
  touch dist/.nojekyll
fi

WORKTREE="$(mktemp -d)"
cleanup() {
  git worktree remove --force "${WORKTREE}" >/dev/null 2>&1 || rm -rf "${WORKTREE}"
}
trap cleanup EXIT

echo "==> Staging dist/ into a temporary ${BRANCH} worktree"
git worktree add --detach "${WORKTREE}" >/dev/null
cd "${WORKTREE}"
git checkout --orphan "${BRANCH}" >/dev/null 2>&1
git rm -rq --cached . >/dev/null 2>&1 || true
find . -mindepth 1 -maxdepth 1 -not -name .git -exec rm -rf {} +
cp -r "${PROJECT_ROOT}/dist/." .

git add -A
if git diff --cached --quiet; then
  echo "==> No changes in the build output; nothing to publish."
  exit 0
fi

SOURCE_SHA="$(git -C "${PROJECT_ROOT}" rev-parse --short HEAD)"
git commit -q -m "deploy: publish production build to GitHub Pages

Static build generated from main@${SOURCE_SHA} with VITE_BASE_PATH=${BASE_PATH}."

echo "==> Pushing ${BRANCH}"
git push --force origin "${BRANCH}"

echo
echo "Published. GitHub Pages will rebuild shortly:"
echo "  https://penndivinefavour-lab.github.io/beko-building-workshop/"
echo "Repository: https://github.com/${REPO_SLUG}"
