/*void selection_sort(float vet[],int tam){
    int i,j,menor;
    float troca;
    for(i=0;i<tam;i++){
        menor=i;
        for(j=i+1;j<=tam-1;j++){
            if(vet[j]<vet[menor]){
                menor=j;
            }
        }
        if(i!=menor){
            troca=vet[i];
            vet[i]=vet[menor];
            vet[menor]=troca;
        }
    }
}
*/
function selection_sort(vet){
    let i,j,menor;
    let troca;
    for(i=0;i<vet.length;i++){
        menor=i;
        for(j=i+1;j<=vet.length-1;j++){
            if(vet[j]<vet[menor]){
                menor=j;
            }
        }
        if(i!=menor){
            troca=vet[i];
            vet[i]=vet[menor];
            vet[menor]=troca;
        }
    }
    return vet;
}
export default selection_sort;