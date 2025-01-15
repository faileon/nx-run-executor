# Custom executor bug
I can `nx build app` without issues, but calling build using my executor `nx my-target app` which usees the `runExecutor` internally won't work and throw `Cannot read properties of undefined (reading 'version')`
