let cp=require('child_process');
let content=cp.execSync("node test.js");
console.log("output form text.js"+content);