## Webpack configuration boiler plate
Modify and cleanup after [Front End Master's webpack 4 fundamentals](
https://frontendmasters.com/courses/webpack-fundamentals/
)

### To run:
```
$ npx webpack [--env.presets <presetName>] [--env.mode <mode>]
```
`<presetName>` : name of preset specified in `build-utils/presets/webpack.<preset>`

`<mode>` : one of `none`, `development`, `production` (if `--env.mode` is absence, it is defaulted to `production`)

### Development watch using nodemon:
```
$ nodemon --ignore 'dist' ./node_modules/.bin/webpack -- --env.presets <preset> --env.mode <mode>
```

### Debuging with chrome inpsector:
```
$ node --inspect-brk ./node_modules/.bin/webpack -- --env.presets <preset> --env.mode <mode>
chrome://inspect
```

Open in chrome with: `chrome://inspect`

### Example:
```
npx webpack -- --env.presets analyze --env.mode development
node --inspect-brk ./node_modules/.bin/webpack -- --env.presets analyze --env.mode development
```


