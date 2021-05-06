import perfy from 'perfy';

const testes_random = [vet_10, vet_100, vet_1000, vet_10000, vet_100000];
const testes_invert = [invert_10, invert_100, invert_1000, invert_10000, invert_100000];
const testes_sorted = [sorted_10, sorted_100, sorted_1000, sorted_10000, sorted_100000];

const testes_random2 = [vet_20, vet_200, vet_2000, vet_20000, vet_200000];
const testes_invert2 = [invert_20, invert_200, invert_2000, invert_20000, invert_200000];
const testes_sorted2 = [sorted_20, sorted_200, sorted_2000, sorted_20000, sorted_200000];

const testes_random3 = [vet_30, vet_300, vet_3000, vet_30000, vet_300000];
const testes_invert3 = [invert_30, invert_300, invert_3000, invert_30000, invert_300000];
const testes_sorted3 = [sorted_30, sorted_300, sorted_3000, sorted_30000, sorted_300000];


//----------------------VETORES PARA ARMAZENAR OS SEGUNDOS
//-----------------------QUICK----------
var QuickRandom10=[];
var QuickRandom20=[];
var QuickRandom30=[];

var QuickInvert10=[];
var QuickInvert20=[];
var QuickInvert30=[];

var QuickSorted10=[];
var QuickSorted20=[];
var QuickSorted30=[];
//-----------------------MERGE----------
var MergeRandom10=[];
var MergeRandom20=[];
var MergeRandom30=[];

var MergeInvert10=[];
var MergeInvert20=[];
var MergeInvert30=[];

var MergeSorted10=[];
var MergeSorted20=[];
var MergeSorted30=[];
//-------------------------HEAP-----------
var HeapRandom10=[];
var HeapRandom20=[];
var HeapRandom30=[];

var HeapInvert10=[];
var HeapInvert20=[];
var HeapInvert30=[];

var HeapSorted10=[];
var HeapSorted20=[];
var HeapSorted30=[];
//-----------------------INSERTION-----------
var InsertionRandom10=[];
var InsertionRandom20=[];
var InsertionRandom30=[];

var InsertionInvert10=[];
var InsertionInvert20=[];
var InsertionInvert30=[];

var InsertionSorted10=[];
var InsertionSorted20=[];
var InsertionSorted30=[];
//-------------------------SELECTION-----------
var SelectionRandom10=[];
var SelectionRandom20=[];
var SelectionRandom30=[];

var SelectionInvert10=[];
var SelectionInvert20=[];
var SelectionInvert30=[];

var SelectionSorted10=[];
var SelectionSorted20=[];
var SelectionSorted30=[];
//---------------------------BUBBLE------------
var BubbleRandom10=[];
var BubbleRandom20=[];
var BubbleRandom30=[];

var BubbleInvert10=[];
var BubbleInvert20=[];
var BubbleInvert30=[];

var BubbleSorted10=[];
var BubbleSorted20=[];
var BubbleSorted30=[];


/*------------------------Rodar os algoritmos por função :D---------------------------*/

quickS();
heapS();
mergeS();
insertionS();
selectionS();
bubbleS();



 //--------------------alg.Sorts--------------------
import insertionSort from './algorithms/insertionSort.js'
import selectionSort from './algorithms/selectionSort.js'
import bubbleSort from './algorithms/bubbleSort.js'
import quickSort from './algorithms/quickSort.js';
import heapSort from './algorithms/heapSort.js';
import mergeSort from './algorithms/mergeSort.js';

//--------------------Testes base 10--------------------
import vet_10 from './sets/random/random_10.js'
import vet_100 from './sets/random/random_100.js'
import vet_1000 from './sets/random/random_1000.js'
import vet_10000 from './sets/random/random_10000.js'
import vet_100000 from './sets/random/random_100000.js'


import invert_10 from './sets/invert/invert_10.js'
import invert_100 from './sets/invert/invert_100.js'
import invert_1000 from './sets/invert/invert_1000.js'
import invert_10000 from './sets/invert/invert_10000.js'
import invert_100000 from './sets/invert/invert_100000.js'

import sorted_10 from './sets/sorted/sorted_10.js'
import sorted_100 from './sets/sorted/sorted_100.js'
import sorted_1000 from './sets/sorted/sorted_1000.js'
import sorted_10000 from './sets/sorted/sorted_10000.js'
import sorted_100000 from './sets/sorted/sorted_100000.js'


//--------------------Testes base 20--------------------
import vet_20 from './sets/random/random_20.js'
import vet_200 from './sets/random/random_200.js'
import vet_2000 from './sets/random/random_2000.js'
import vet_20000 from './sets/random/random_20000.js'
import vet_200000 from './sets/random/random_200000.js'

import invert_20 from './sets/invert/invert_20.js'
import invert_200 from './sets/invert/invert_200.js'
import invert_2000 from './sets/invert/invert_2000.js'
import invert_20000 from './sets/invert/invert_20000.js'
import invert_200000 from './sets/invert/invert_200000.js'

import sorted_20 from './sets/sorted/sorted_20.js'
import sorted_200 from './sets/sorted/sorted_200.js'
import sorted_2000 from './sets/sorted/sorted_2000.js'
import sorted_20000 from './sets/sorted/sorted_20000.js'
import sorted_200000 from './sets/sorted/sorted_200000.js'


//--------------------Testes base 30--------------------
import vet_30 from './sets/random/random_30.js'
import vet_300 from './sets/random/random_300.js'
import vet_3000 from './sets/random/random_3000.js'
import vet_30000 from './sets/random/random_30000.js'
import vet_300000 from './sets/random/random_300000.js'

import invert_30 from './sets/invert/invert_30.js'
import invert_300 from './sets/invert/invert_300.js'
import invert_3000 from './sets/invert/invert_3000.js'
import invert_30000 from './sets/invert/invert_30000.js'
import invert_300000 from './sets/invert/invert_300000.js'

import sorted_30 from './sets/sorted/sorted_30.js'
import sorted_300 from './sets/sorted/sorted_300.js'
import sorted_3000 from './sets/sorted/sorted_3000.js'
import sorted_30000 from './sets/sorted/sorted_30000.js'
import sorted_300000 from './sets/sorted/sorted_300000.js'

import insereTempo from './InsereTempo.js'
import fazGrafico from './CriaExcel/criarExcel.js'


function quickS(){
  console.log("------------------quickSort------------------")
  console.log("\nCarregando...");
  testes_random.forEach(t => {
    perfy.start('label-start');
    let result = quickSort(t);
    let end = perfy.end('label-start').time;
    QuickRandom10.push(end);
    //console.log("Tempo de execução do quickSort com ",result.length, "elementos aleatórios :", end, "s")
  });
  testes_invert.forEach(t => {
    perfy.start('label-start');
    let result = quickSort(t);
    let end = perfy.end('label-start').time;
    QuickInvert10.push(end);
    //console.log("Tempo de execução do quickSort com ",result.length, "elementos invertidos :", end, "s")
  });
  testes_sorted.forEach(t => {
    perfy.start('label-start');
    let result = quickSort(t);
    let end = perfy.end('label-start').time;
    QuickSorted10.push(end);
    //console.log("Tempo de execução do quickSort com ",result.length, "elementos ordenados :", end, "s")
  });
  //--------------------------20 ELEMENTOS------------------------------
  console.log("\n")
  testes_random2.forEach(t => {
    perfy.start('label-start');
    let result = quickSort(t);
    let end = perfy.end('label-start').time;
    QuickRandom20.push(end);
    //console.log("Tempo de execução do quickSort com ",result.length, "elementos aleatórios :", end, "s")
  });
  testes_invert2.forEach(t => {
    perfy.start('label-start');
    let result = quickSort(t);
    let end = perfy.end('label-start').time;
    QuickInvert20.push(end);
    //console.log("Tempo de execução do quickSort com ",result.length, "elementos invertidos :", end, "s")
  });
  testes_sorted2.forEach(t => {
    perfy.start('label-start');
    let result = quickSort(t);
    let end = perfy.end('label-start').time;
    QuickSorted20.push(end)
    //console.log("Tempo de execução do quickSort com ",result.length, "elementos ordenados :", end, "s")
  });
  //-------------------------30 ELEMENTOS---------------------------
  console.log("\n")
  testes_random3.forEach(t => {
    perfy.start('label-start');
    let result = quickSort(t);
    let end = perfy.end('label-start').time;
    QuickRandom30.push(end);
    //console.log("Tempo de execução do quickSort com ",result.length, "elementos aleatórios :", end, "s")
  });
  testes_invert3.forEach(t => {
    perfy.start('label-start');
    let result = quickSort(t);
    let end = perfy.end('label-start').time;
    QuickInvert30.push(end);
    //console.log("Tempo de execução do quickSort com ",result.length, "elementos invertidos :", end, "s")
  });
  testes_sorted3.forEach(t => {
    perfy.start('label-start');
    let result = quickSort(t);
    let end = perfy.end('label-start').time;
    QuickSorted30.push(end);
    //console.log("Tempo de execução do quickSort com ",result.length, "elementos ordenados :", end, "s")
  });
    console.log("\nFoi :D");
  }
  
  function heapS(){
  console.log("\n------------------heapSort------------------")
  console.log("\nCarregando...")
  //---------------------------------------10 ELEMENTOS-------------------------------
   testes_invert.forEach(t => {
     perfy.start('label-start');
     let result = heapSort(t);
     let end = perfy.end('label-start').time;
     HeapInvert10.push(end);
     //console.log("Tempo de execução do heapSort com ",result.length, "elementos decrescentes:", end, "s")
   });
   testes_random.forEach(t => {
    perfy.start('label-start');
    let result = heapSort(t);
    let end = perfy.end('label-start').time;
    HeapRandom10.push(end);
    //console.log("Tempo de execução do heapSort com ",result.length, "elementos aleatórios:", end, "s")
  });
  testes_sorted.forEach(t => {
    perfy.start('label-start');
    let result = heapSort(t);
    let end = perfy.end('label-start').time;
    HeapSorted10.push(end);
    //console.log("Tempo de execução do heapSort com ",result.length, "elementos ordenados:", end, "s")
  });
  //---------------------------------------20 ELEMENTOS-------------------------------
  console.log("\n")
  testes_invert2.forEach(t => {
    perfy.start('label-start');
    let result = heapSort(t);
    let end = perfy.end('label-start').time;
    HeapInvert20.push(end);
    //console.log("Tempo de execução do heapSort com ",result.length, "elementos decrescentes:", end, "s")
  });
  testes_random2.forEach(t => {
   perfy.start('label-start');
   let result = heapSort(t);
   let end = perfy.end('label-start').time;
   HeapRandom20.push(end);
   //console.log("Tempo de execução do heapSort com ",result.length, "elementos aleatórios:", end, "s")
  });
  testes_sorted2.forEach(t => {
   perfy.start('label-start');
   let result = heapSort(t);
   let end = perfy.end('label-start').time;
   HeapSorted20.push(end);
   //console.log("Tempo de execução do heapSort com ",result.length, "elementos ordenados:", end, "s")
  });
  //---------------------------------------30 ELEMENTOS-------------------------------
  console.log("\n")
  testes_invert3.forEach(t => {
    perfy.start('label-start');
    let result = heapSort(t);
    let end = perfy.end('label-start').time;
    HeapInvert30.push(end);
    //console.log("Tempo de execução do heapSort com ",result.length, "elementos decrescentes:", end, "s")
  });
  testes_random3.forEach(t => {
   perfy.start('label-start');
   let result = heapSort(t);
   let end = perfy.end('label-start').time;
   HeapRandom30.push(end);
   //console.log("Tempo de execução do heapSort com ",result.length, "elementos aleatórios:", end, "s")
  });
  testes_sorted3.forEach(t => {
   perfy.start('label-start');
   let result = heapSort(t);
   let end = perfy.end('label-start').time;
   HeapSorted30.push(end);
   //console.log("Tempo de execução do heapSort com ",result.length, "elementos ordenados:", end, "s")
  });
  console.log("\nFoi :D");
  }
  
  function mergeS(){
   console.log("\n------------------mergeSort------------------")
   console.log("\nCarregando...");
   //---------------------------------------10 ELEMENTOS-------------------------------
   testes_invert.forEach(t => {
     perfy.start('label-start');
     let result = mergeSort(t);
     let end = perfy.end('label-start').time;
     MergeInvert10.push(end);
     //console.log("Tempo de execução do mergeSort com ",result.length, "elementos invertidos:", end, "s")
   });
   testes_random.forEach(t => {
    perfy.start('label-start');
    let result = mergeSort(t);
    let end = perfy.end('label-start').time;
    MergeRandom10.push(end);
    //console.log("Tempo de execução do mergeSort com ",result.length, "elementos aleatórios:", end, "s")
  });
  testes_sorted.forEach(t => {
    perfy.start('label-start');
    let result = mergeSort(t);
    let end = perfy.end('label-start').time;
    MergeSorted10.push(end);
    //console.log("Tempo de execução do mergeSort com ",result.length, "elementos ordenados:", end, "s")
  });
  //---------------------------------------20 ELEMENTOS-------------------------------
  console.log("\n")
  testes_invert2.forEach(t => {
    perfy.start('label-start');
    let result = mergeSort(t);
    let end = perfy.end('label-start').time;
    MergeInvert20.push(end);
    //console.log("Tempo de execução do mergeSort com ",result.length, "elementos invertidos:", end, "s")
  });
  testes_random2.forEach(t => {
   perfy.start('label-start');
   let result = mergeSort(t);
   let end = perfy.end('label-start').time;
   MergeRandom20.push(end);
   //console.log("Tempo de execução do mergeSort com ",result.length, "elementos aleatórios:", end, "s")
  });
  testes_sorted2.forEach(t => {
   perfy.start('label-start');
   let result = mergeSort(t);
   let end = perfy.end('label-start').time;
   MergeSorted20.push(end);
   //console.log("Tempo de execução do mergeSort com ",result.length, "elementos ordenados:", end, "s")
  });
  //---------------------------------------30 ELEMENTOS-------------------------------
  console.log("\n")
  testes_invert3.forEach(t => {
    perfy.start('label-start');
    let result = mergeSort(t);
    let end = perfy.end('label-start').time;
    MergeInvert30.push(end);
    //console.log("Tempo de execução do mergeSort com ",result.length, "elementos invertidos:", end, "s")
  });
  testes_random3.forEach(t => {
   perfy.start('label-start');
   let result = mergeSort(t);
   let end = perfy.end('label-start').time;
   MergeRandom30.push(end);
   //console.log("Tempo de execução do mergeSort com ",result.length, "elementos aleatórios:", end, "s")
  });
  testes_sorted3.forEach(t => {
   perfy.start('label-start');
   let result = mergeSort(t);
   let end = perfy.end('label-start').time;
   MergeSorted30.push(end);
   //console.log("Tempo de execução do mergeSort com ",result.length, "elementos ordenados:", end, "s")
  });
  console.log("\nFoi :D");
  }
  function insertionS(){
   console.log("\n------------------insertionSort------------------")
   console.log("\nCarregando...");
   //---------------------------------------10 ELEMENTOS-------------------------------
   testes_invert.forEach(t => {
     perfy.start('label-start');
     let result = insertionSort(t);
     let end = perfy.end('label-start').time;
     InsertionInvert10.push(end);
     //console.log("Tempo de execução do insertionSort com ",result.length, "elementos invertidos:", end, "s")
   });
   testes_random.forEach(t => {
    perfy.start('label-start');
    let result = insertionSort(t);
    let end = perfy.end('label-start').time;
    InsertionRandom10.push(end);
    //console.log("Tempo de execução do insertionSort com ",result.length, "elementos aleatórios:", end, "s")
  });
  testes_sorted.forEach(t => {
    perfy.start('label-start');
    let result = insertionSort(t);
    let end = perfy.end('label-start').time;
    InsertionSorted10.push(end);
    //console.log("Tempo de execução do insertionSort com ",result.length, "elementos ordenados:", end, "s")
  });
  //---------------------------------------20 ELEMENTOS-------------------------------
  console.log("\n")
  testes_invert2.forEach(t => {
    perfy.start('label-start');
    let result = insertionSort(t);
    let end = perfy.end('label-start').time;
    InsertionInvert20.push(end);
    //console.log("Tempo de execução do insertionSort com ",result.length, "elementos invertidos:", end, "s")
  });
  testes_random2.forEach(t => {
   perfy.start('label-start');
   let result = insertionSort(t);
   let end = perfy.end('label-start').time;
   InsertionRandom20.push(end);
   //console.log("Tempo de execução do insertionSort com ",result.length, "elementos aleatórios:", end, "s")
  });
  testes_sorted2.forEach(t => {
   perfy.start('label-start');
   let result = insertionSort(t);
   let end = perfy.end('label-start').time;
   InsertionSorted20.push(end);
   //console.log("Tempo de execução do insertionSort com ",result.length, "elementos ordenados:", end, "s")
  });
  //---------------------------------------30 ELEMENTOS-------------------------------
  console.log("\n")
  testes_invert3.forEach(t => {
    perfy.start('label-start');
    let result = insertionSort(t);
    let end = perfy.end('label-start').time;
    InsertionInvert30.push(end);
    //console.log("Tempo de execução do insertionSort com ",result.length, "elementos invertidos:", end, "s")
  });
  testes_random3.forEach(t => {
   perfy.start('label-start');
   let result = insertionSort(t);
   let end = perfy.end('label-start').time;
   InsertionRandom30.push(end);
   //console.log("Tempo de execução do insertionSort com ",result.length, "elementos aleatórios:", end, "s")
  });
  testes_sorted3.forEach(t => {
   perfy.start('label-start');
   let result = insertionSort(t);
   let end = perfy.end('label-start').time;
   InsertionSorted30.push(end);
   //console.log("Tempo de execução do insertionSort com ",result.length, "elementos ordenados:", end, "s")
  });
  console.log("\nFoi :D");
  }
  function selectionS(){
   console.log("\n------------------selectionSort------------------")
   console.log("\nCarregando...");
   //---------------------------------------10 ELEMENTOS-------------------------------
   testes_invert.forEach(t => {
     perfy.start('label-start');
     let result = selectionSort(t);
     let end = perfy.end('label-start').time;
     SelectionInvert10.push(end);
     //console.log("Tempo de execução do selectionSort com ",result.length, "elementos invertidos:", end, "s")
   });
   testes_random.forEach(t => {
    perfy.start('label-start');
    let result = selectionSort(t);
    let end = perfy.end('label-start').time;
    SelectionRandom10.push(end);
    //console.log("Tempo de execução do selectionSort com ",result.length, "elementos aleatórios:", end, "s")
  });
  testes_sorted.forEach(t => {
    perfy.start('label-start');
    let result = selectionSort(t);
    let end = perfy.end('label-start').time;
    SelectionSorted10.push(end);
    //console.log("Tempo de execução do selectionSort com ",result.length, "elementos ordenados:", end, "s")
  });
  //---------------------------------------20 ELEMENTOS-------------------------------
  console.log("\n")
  testes_invert2.forEach(t => {
    perfy.start('label-start');
    let result = selectionSort(t);
    let end = perfy.end('label-start').time;
    SelectionInvert20.push(end);
    //console.log("Tempo de execução do selectionSort com ",result.length, "elementos invertidos:", end, "s")
  });
  testes_random2.forEach(t => {
   perfy.start('label-start');
   let result = selectionSort(t);
   let end = perfy.end('label-start').time;
   SelectionRandom20.push(end);
   //console.log("Tempo de execução do selectionSort com ",result.length, "elementos aleatórios:", end, "s")
  });
  testes_sorted2.forEach(t => {
   perfy.start('label-start');
   let result = selectionSort(t);
   let end = perfy.end('label-start').time;
   SelectionSorted20.push(end);
   //console.log("Tempo de execução do selectionSort com ",result.length, "elementos ordenados:", end, "s")
  });
  //---------------------------------------30 ELEMENTOS-------------------------------
  console.log("\n")
  testes_invert3.forEach(t => {
    perfy.start('label-start');
    let result = selectionSort(t);
    let end = perfy.end('label-start').time;
    SelectionInvert30.push(end);
    //console.log("Tempo de execução do selectionSort com ",result.length, "elementos invertidos:", end, "s")
  });
  testes_random3.forEach(t => {
   perfy.start('label-start');
   let result = selectionSort(t);
   let end = perfy.end('label-start').time;
   SelectionRandom30.push(end);
   //console.log("Tempo de execução do selectionSort com ",result.length, "elementos aleatórios:", end, "s")
  });
  testes_sorted3.forEach(t => {
   perfy.start('label-start');
   let result = selectionSort(t);
   let end = perfy.end('label-start').time;
   SelectionSorted30.push(end);
   //console.log("Tempo de execução do selectionSort com ",result.length, "elementos ordenados:", end, "s")
  });
  console.log("\nFoi :D");
  }
  function bubbleS(){
   console.log("\n------------------bubbleSort------------------")
   console.log("\nCarregando...");
   //---------------------------------------10 ELEMENTOS-------------------------------
   testes_invert.forEach(t => {
     perfy.start('label-start');
     let result = bubbleSort(t);
     let end = perfy.end('label-start').time;
     BubbleInvert10.push(end);
     //console.log("Tempo de execução do bubbleSort com ",result.length, "elementos invertidos:", end, "s")
   });
   testes_random.forEach(t => {
    perfy.start('label-start');
    let result = bubbleSort(t);
    let end = perfy.end('label-start').time;
    BubbleRandom10.push(end);
    //console.log("Tempo de execução do bubbleSort com ",result.length, "elementos aleatórios:", end, "s")
  });
  testes_sorted.forEach(t => {
    perfy.start('label-start');
    let result = bubbleSort(t);
    let end = perfy.end('label-start').time;
    BubbleSorted10.push(end);
    //console.log("Tempo de execução do bubbleSort com ",result.length, "elementos ordenados:", end, "s")
  });
  //---------------------------------------20 ELEMENTOS-------------------------------
  console.log("\n")
  testes_invert2.forEach(t => {
    perfy.start('label-start');
    let result = bubbleSort(t);
    let end = perfy.end('label-start').time;
    BubbleInvert20.push(end);
    //console.log("Tempo de execução do bubbleSort com ",result.length, "elementos invertidos:", end, "s")
  });
  testes_random2.forEach(t => {
   perfy.start('label-start');
   let result = bubbleSort(t);
   let end = perfy.end('label-start').time;
   BubbleRandom20.push(end);
   //console.log("Tempo de execução do bubbleSort com ",result.length, "elementos aleatórios:", end, "s")
  });
  testes_sorted2.forEach(t => {
   perfy.start('label-start');
   let result = bubbleSort(t);
   let end = perfy.end('label-start').time;
   BubbleSorted20.push(end);
   //console.log("Tempo de execução do bubbleSort com ",result.length, "elementos ordenados:", end, "s")
  });
  console.log("\nDaqui a pouco...");
  //---------------------------------------30 ELEMENTOS-------------------------------
  console.log("\n")
  testes_invert3.forEach(t => {
    perfy.start('label-start');
    let result = bubbleSort(t);
    let end = perfy.end('label-start').time;
    BubbleInvert30.push(end);
    //console.log("Tempo de execução do bubbleSort com ",result.length, "elementos invertidos:", end, "s")
  });
  testes_random3.forEach(t => {
   perfy.start('label-start');
   let result = bubbleSort(t);
   let end = perfy.end('label-start').time;
   BubbleRandom30.push(end);
   //console.log("Tempo de execução do bubbleSort com ",result.length, "elementos aleatórios:", end, "s")
  });
  testes_sorted3.forEach(t => {
   perfy.start('label-start');
   let result = bubbleSort(t);
   let end = perfy.end('label-start').time;
   BubbleSorted30.push(end);
   //console.log("Tempo de execução do bubbleSort com ",result.length, "elementos ordenados:", end, "s")
  });
  console.log("\nFoi :D");
  }


//-------------------------Criando objetos para fazer os gráficos no Excel
var QuickSortRandom={
  v10:0,
  v20:0,
  v30:0,

  v100:0,
  v200:0,
  v300:0,

  v1000:0,
  v2000:0,
  v3000:0,

  v10000:0,
  v20000:0,
  v30000:0,

  v100000:0,
  v200000:0,
  v300000:0
};
var QuickSortSorted={
  v10:0,
  v20:0,
  v30:0,

  v100:0,
  v200:0,
  v300:0,

  v1000:0,
  v2000:0,
  v3000:0,

  v10000:0,
  v20000:0,
  v30000:0,

  v100000:0,
  v200000:0,
  v300000:0
};
var QuickSortInvert={
  v10:0,
  v20:0,
  v30:0,

  v100:0,
  v200:0,
  v300:0,

  v1000:0,
  v2000:0,
  v3000:0,

  v10000:0,
  v20000:0,
  v30000:0,

  v100000:0,
  v200000:0,
  v300000:0
};

//-------------------MERGE
var MergeSortRandom={
  v10:0,
  v20:0,
  v30:0,

  v100:0,
  v200:0,
  v300:0,

  v1000:0,
  v2000:0,
  v3000:0,

  v10000:0,
  v20000:0,
  v30000:0,

  v100000:0,
  v200000:0,
  v300000:0
};
var MergeSortSorted={
  v10:0,
  v20:0,
  v30:0,

  v100:0,
  v200:0,
  v300:0,

  v1000:0,
  v2000:0,
  v3000:0,

  v10000:0,
  v20000:0,
  v30000:0,

  v100000:0,
  v200000:0,
  v300000:0
};
var MergeSortInvert={
  v10:0,
  v20:0,
  v30:0,

  v100:0,
  v200:0,
  v300:0,

  v1000:0,
  v2000:0,
  v3000:0,

  v10000:0,
  v20000:0,
  v30000:0,

  v100000:0,
  v200000:0,
  v300000:0
};
//---------------------------HEAP--------------
var HeapSortRandom={
  v10:0,
  v20:0,
  v30:0,

  v100:0,
  v200:0,
  v300:0,

  v1000:0,
  v2000:0,
  v3000:0,

  v10000:0,
  v20000:0,
  v30000:0,

  v100000:0,
  v200000:0,
  v300000:0
};
var HeapSortSorted={
  v10:0,
  v20:0,
  v30:0,

  v100:0,
  v200:0,
  v300:0,

  v1000:0,
  v2000:0,
  v3000:0,

  v10000:0,
  v20000:0,
  v30000:0,

  v100000:0,
  v200000:0,
  v300000:0
};
var HeapSortInvert={
  v10:0,
  v20:0,
  v30:0,

  v100:0,
  v200:0,
  v300:0,

  v1000:0,
  v2000:0,
  v3000:0,

  v10000:0,
  v20000:0,
  v30000:0,

  v100000:0,
  v200000:0,
  v300000:0
};
//----------------------------INSERTION--------
var InsertionSortRandom={
  v10:0,
  v20:0,
  v30:0,

  v100:0,
  v200:0,
  v300:0,

  v1000:0,
  v2000:0,
  v3000:0,

  v10000:0,
  v20000:0,
  v30000:0,

  v100000:0,
  v200000:0,
  v300000:0
};
var InsertionSortSorted={
  v10:0,
  v20:0,
  v30:0,

  v100:0,
  v200:0,
  v300:0,

  v1000:0,
  v2000:0,
  v3000:0,

  v10000:0,
  v20000:0,
  v30000:0,

  v100000:0,
  v200000:0,
  v300000:0
};
var InsertionSortInvert={
  v10:0,
  v20:0,
  v30:0,

  v100:0,
  v200:0,
  v300:0,

  v1000:0,
  v2000:0,
  v3000:0,

  v10000:0,
  v20000:0,
  v30000:0,

  v100000:0,
  v200000:0,
  v300000:0
};
//--------------------SELECTION--------------
var SelectionSortRandom={
  v10:0,
  v20:0,
  v30:0,

  v100:0,
  v200:0,
  v300:0,

  v1000:0,
  v2000:0,
  v3000:0,

  v10000:0,
  v20000:0,
  v30000:0,

  v100000:0,
  v200000:0,
  v300000:0
};
var SelectionSortSorted={
  v10:0,
  v20:0,
  v30:0,

  v100:0,
  v200:0,
  v300:0,

  v1000:0,
  v2000:0,
  v3000:0,

  v10000:0,
  v20000:0,
  v30000:0,

  v100000:0,
  v200000:0,
  v300000:0
};
var SelectionSortInvert={
  v10:0,
  v20:0,
  v30:0,

  v100:0,
  v200:0,
  v300:0,

  v1000:0,
  v2000:0,
  v3000:0,

  v10000:0,
  v20000:0,
  v30000:0,

  v100000:0,
  v200000:0,
  v300000:0
};
//-----------------------BUBBLE----------------
var BubbleSortRandom={
  v10:0,
  v20:0,
  v30:0,

  v100:0,
  v200:0,
  v300:0,

  v1000:0,
  v2000:0,
  v3000:0,

  v10000:0,
  v20000:0,
  v30000:0,

  v100000:0,
  v200000:0,
  v300000:0
};
var BubbleSortSorted={
  v10:0,
  v20:0,
  v30:0,

  v100:0,
  v200:0,
  v300:0,

  v1000:0,
  v2000:0,
  v3000:0,

  v10000:0,
  v20000:0,
  v30000:0,

  v100000:0,
  v200000:0,
  v300000:0
};
var BubbleSortInvert={
  v10:0,
  v20:0,
  v30:0,

  v100:0,
  v200:0,
  v300:0,

  v1000:0,
  v2000:0,
  v3000:0,

  v10000:0,
  v20000:0,
  v30000:0,

  v100000:0,
  v200000:0,
  v300000:0
};

/* FINALMENTE FAZ O GRÁFICO */
//-----------------------------GRÁFICO DE RANDOM------------------------------
QuickSortRandom = insereTempo(QuickSortRandom,QuickRandom10,QuickRandom20,QuickRandom30);
MergeSortRandom = insereTempo(MergeSortRandom,MergeRandom10,MergeRandom20,MergeRandom30);
HeapSortRandom = insereTempo(HeapSortRandom,HeapRandom10,HeapRandom20,HeapRandom30);
InsertionSortRandom = insereTempo(InsertionSortRandom,InsertionRandom10,InsertionRandom20,InsertionRandom30);
SelectionSortRandom = insereTempo(SelectionSortRandom,SelectionRandom10,SelectionRandom20,SelectionRandom30);
BubbleSortRandom = insereTempo(BubbleSortRandom,BubbleRandom10,BubbleRandom20,BubbleRandom30);


fazGrafico("Random",QuickSortRandom,MergeSortRandom,HeapSortRandom,InsertionSortRandom,SelectionSortRandom,BubbleSortRandom);

//-----------------------------GRÁFICO DE Invert------------------------------
QuickSortInvert = insereTempo(QuickSortInvert,QuickInvert10,QuickInvert20,QuickInvert30);
MergeSortInvert = insereTempo(MergeSortInvert,MergeInvert10,MergeInvert20,MergeInvert30);
HeapSortInvert = insereTempo(HeapSortInvert,HeapInvert10,HeapInvert20,HeapInvert30);
InsertionSortInvert = insereTempo(InsertionSortInvert,InsertionInvert10,InsertionInvert20,InsertionInvert30);
SelectionSortInvert = insereTempo(SelectionSortInvert,SelectionInvert10,SelectionInvert20,SelectionInvert30);
BubbleSortInvert = insereTempo(BubbleSortInvert,BubbleInvert10,BubbleInvert20,BubbleInvert30);


fazGrafico("Invert",QuickSortInvert,MergeSortInvert,HeapSortInvert,InsertionSortInvert,SelectionSortInvert,BubbleSortInvert);

//-----------------------------GRÁFICO DE Sorted------------------------------
QuickSortSorted = insereTempo(QuickSortSorted,QuickSorted10,QuickSorted20,QuickSorted30);
MergeSortSorted = insereTempo(MergeSortSorted,MergeSorted10,MergeSorted20,MergeSorted30);
HeapSortSorted = insereTempo(HeapSortSorted,HeapSorted10,HeapSorted20,HeapSorted30);
InsertionSortSorted = insereTempo(InsertionSortSorted,InsertionSorted10,InsertionSorted20,InsertionSorted30);
SelectionSortSorted = insereTempo(SelectionSortSorted,SelectionSorted10,SelectionSorted20,SelectionSorted30);
BubbleSortSorted = insereTempo(BubbleSortSorted,BubbleSorted10,BubbleSorted20,BubbleSorted30);


fazGrafico("Sorted",QuickSortSorted,MergeSortSorted,HeapSortSorted,InsertionSortSorted,SelectionSortSorted,BubbleSortSorted);