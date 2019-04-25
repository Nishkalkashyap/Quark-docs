// import * as vm from 'vm';
import * as fs from 'fs-extra';
import * as press from 'vuepress';
import * as mock from 'mock-require';

// mock('fs-extra', function (str) {
//     console.log(str);
//     return fs;
// });
const fss = new Proxy(fs, {
    get: (tsrget, key) => {
        console.log(key);
        return fs[key];
    }
})

mock('fs-extra', fss);

press.build('./docs').then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

// const sandbox = { x: 2 };
// vm.createContext(sandbox);
// const code = 'x += 40; var y = 17;'
// vm.runInContext(code, sandbox);