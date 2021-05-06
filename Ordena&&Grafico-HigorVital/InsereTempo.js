function insereTempo(QuickSortRandom,QuickRandom10,QuickRandom20,QuickRandom30){
//para o 10
var cont=0,percorre=0;
for(const key of Object.keys(QuickSortRandom)){
    if(cont%3==0){
        QuickSortRandom[key]=QuickRandom10[percorre];
        percorre++;
    }
    cont++;
}
//para o 20
cont=2,percorre=0;
for(const key of Object.keys(QuickSortRandom)){
    if(cont%3==0){
        QuickSortRandom[key]=QuickRandom20[percorre];
        percorre++;
    }
    cont++;
}
//para o 30
cont=1,percorre=0;
for(const key of Object.keys(QuickSortRandom)){
    if(cont%3==0){
        QuickSortRandom[key]=QuickRandom30[percorre];
        percorre++;
    }
    cont++;
}
return QuickSortRandom;
}

export default insereTempo;