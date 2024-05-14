let L=180;
let N=3;
let Photo= [
{W:640,H:480},
{W:120,H:300},
{W:180,H:180}
] ;


for(let i = 0; i< N; i++){
    if(Photo[i].W < L || Photo[i].H < L){
        console.log("UPLOAD ANOTHER");
    }else if(Photo[i].W === Photo[i].H){
        console.log("ACCEPTED");
    }else{
        console.log("CROP IT");
    }
}