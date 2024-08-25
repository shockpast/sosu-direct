@echo off
title osu!direct - copycat of it.

cd /d "%1"

bun run src/download.ts %2