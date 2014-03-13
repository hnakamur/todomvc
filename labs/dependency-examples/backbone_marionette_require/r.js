#!/usr/bin/env bash
set -e
[ -n "$NDENV_DEBUG" ] && set -x

program="${0##*/}"
if [ "$program" = "node" ]; then
  for arg; do
    case "$arg" in
    -e* | -- ) break ;;
    */* )
      if [ -f "$arg" ]; then
        export NDENV_DIR="${arg%/*}"
        break
      fi
      ;;
    esac
  done
fi

export NDENV_ROOT="/Users/hnakamur/.anyenv/envs/ndenv"
exec "/Users/hnakamur/.anyenv/envs/ndenv/libexec/ndenv" exec "$program" "$@"
