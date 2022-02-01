# bad-pack for npm

## Documentation

```js
const bad = require("bad-pack");

//logs bad in the console
bad.log("bad");

//youll see what this does :>
bad.rr();

//makes a Discord bot
//prefix and status are optional
bad.bot("token", "prefix", "status");
```

### Bot commands

| Command       | Description| Example           | Result      |
| ------------- |:-------------:|:-------------:|:-------------:|
|!say <*message*> | Repeats text after say | !say hello | hello