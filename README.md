# Custom executor bug
I can `nx build app` without issues, but calling build via the `runExecutor` inside my plugin executor won't work and throw `Cannot read properties of undefined (reading 'version')`
