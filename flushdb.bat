if exist ".\data\db\" (
cd ".\data\db\"
del /F/S/Q *.*
pushd %1
del /q
for /f "tokens=*" %%G IN ('dir /b') do rd /s /q "%%G"
)