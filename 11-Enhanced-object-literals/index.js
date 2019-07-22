// enhanced object literals 

const name = 'tom';

const cat = {
    name,
    run() {
        console.log(`${name} running.....`);
    }
}

cat.run()