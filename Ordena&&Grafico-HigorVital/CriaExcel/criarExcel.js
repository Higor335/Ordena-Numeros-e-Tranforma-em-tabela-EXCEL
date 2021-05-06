import xl from "excel4node";

const wb = new xl.Workbook();

function fazGrafico(tipo,QuickSort,MergeSort,HeapSort,InsertionSort,SelectionSort,BubbleSort){
const ws = wb.addWorksheet(tipo);

const data=[QuickSort,MergeSort,HeapSort,InsertionSort,SelectionSort,BubbleSort];
let nomes=["QuickSort","MergeSort","HeapSort","InsertionSort","SelectionSort","BubbleSort"],i=0;
const headingColumnNames=[
    "",
    "v10",
    "v20",
    "v30",

    "v100",
    "v200",
    "v300",

    "v1000",
    "v2000",
    "v3000",

    "v10000",
    "v20000",
    "v30000",

    "v100000",
    "v200000",
    "v300000",
];


let headingColumnIndex = 1;
headingColumnNames.forEach(heading=>{
    ws.cell(1,headingColumnIndex++).string(heading);
});

let rowIndex=2;
data.forEach(record=>{
    let columnIndex=1;
    /* */ws.cell(rowIndex,columnIndex++).string(String(nomes[i]))
    i++;
    Object.keys(record).forEach(columnName=>{
        ws.cell(rowIndex,columnIndex++).string(String(record[columnName]))
    });
    rowIndex++;
});

wb.write(tipo+"Sort.xlsx");
}

export default fazGrafico;