/*void insertion_sort(int vet[], int n){
    int i,j,aux;
    int cont=0;
    for(i=1;i<n;i++){
        aux=vet[i];
        for(j=i;(j>0) && (aux<vet[j - 1]);j--){
            vet[j] = vet[j - 1];
        }
        if(vet[j]!=aux)
            cont++;
        vet[j]=aux;
    }
}
*/

function insertion_sort(vet){
    let i,j,aux,cont=0;
    for(i=1;i<vet.length;i++){
        aux=vet[i];
        for(j=i;(j>0) && (aux<vet[j - 1]);j--){
            vet[j] = vet[j - 1];
        }
        if(vet[j]!=aux)
            cont++;
        vet[j]=aux;
    }
    return vet;
}
export default insertion_sort;