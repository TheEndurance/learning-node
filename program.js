const commandLineArrays = process.argv;
let total = 0;
for (let i=2;i<commandLineArrays.length;i++){
    total+=Number(commandLineArrays[i]);
}
console.log(total);