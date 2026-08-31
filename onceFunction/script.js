function once(fn) {
    let executed = false;
    return function() {
        if(executed) {
            return;
        }
        fn();
        executed = true;
    }
}

const greet = once(() => { console.log('init!'); return 'done'; })
const greet1 = once(() => console.log("Bye"))
greet()
greet()
greet()
