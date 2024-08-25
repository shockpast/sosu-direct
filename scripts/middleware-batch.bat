@echo off
title osu!direct - copycat of it.

for /f "tokens=3*" %%a in ('reg query "HKEY_CLASSES_ROOT\osu_auto_file\shell\open\command"') do set SOSU_PATH=%%a

set SOSU_COMMAND=%1
set SOSU_COMMAND=%SOSU_COMMAND:~7%
set SOSU_COMMAND=%SOSU_COMMAND:~0,-1%

curl -sS -L --output "%SOSU_COMMAND%.osz" --output-dir "%0\..\..\songs" "https://direct.osuokayu.moe/api/v1/d/%SOSU_COMMAND%"
%SOSU_PATH% "%0\..\..\songs\%SOSU_COMMAND%.osz"
