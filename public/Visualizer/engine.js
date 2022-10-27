const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
var lines = new Array();
var columns = new Array();
let step_width_global = 0;
let ysteps = 0;
let xsteps = 0;
class myrectangle{
    constructor(index, line_number){
        this.index = index;
        this.line_number = line_number;
    }

    draw(color="#2D2D2F"){
        for(let j=0; j<this.line_number; j++){
            ctx.beginPath();
            ctx.fillStyle = color;//"#2D2D2F";
            ctx.fillRect(this.index * step_width_global +1, -step_width_global * j + canvas.clientHeight+1,
                 step_width_global-2, -step_width_global+1);
        }
    }
    clear(){
        for(let j=0; j<ysteps; j++){
            ctx.beginPath();
            ctx.fillStyle = "#b3b4b2";
            ctx.fillRect(this.index * step_width_global +1, -step_width_global * j + canvas.clientHeight+1, 
                step_width_global-2, -step_width_global+1);
        }

    }
}
class grid{
    constructor(step_width){
        this.step_width = step_width;
        step_width_global = step_width;
    }
    draw(){
        let padding_y = 4.9;
        let padding_x = 0;
        //normalize values
        xsteps = Math.floor((canvas.clientWidth - 2 * padding_x) / this.step_width) +1 ;
        ysteps = Math.floor((canvas.clientHeight - 2 * padding_y) / this.step_width) +1 ;
        //loop over array and draw grid having width < y_step
        //k counter
        ctx.strokeStyle = "#858882";
        ctx.lineWidth = 2;
        //draw columns
        for(let i=0; i<=xsteps;i++){
            let x = i * ( this.step_width );
            ctx.beginPath();
            ctx.moveTo(x + padding_x, padding_y);
            ctx.lineTo(x + padding_x, canvas.clientHeight);
            ctx.stroke();
            columns[i] = x + padding_x;
        }
        //draw lines
        for(let j=0; j<=ysteps;j++){
            let y = j * ( this.step_width );
            ctx.beginPath();
            ctx.moveTo(padding_x, y+ padding_y);
            ctx.lineTo(canvas.clientWidth - padding_x, y + padding_y);
            ctx.stroke();
            lines[j] = y + padding_y;
        }
        //console.log(lines, columns);
    }
}

grid1 = new grid(12);
grid1.draw();
//console.log(step_width_global);
let rec_array = new Array();
for(let i=0; i<columns.length-2;i++){
    height = Math.random() * (canvas.clientHeight - 30) +1;
    rec_array[i] = new myrectangle(i, height/step_width_global);
    rec_array[i].draw();
}
function BubbleSort(rec_array){
    let i, j;
    for (i = 0; i < rec_array.length; i++){
        for (j = 0; j < rec_array.length-i-1; j++){
            if (rec_array[j].line_number < rec_array[j+1].line_number){
                aux = rec_array[j].line_number;
                rec_array[j].line_number = rec_array[j+1].line_number;
                rec_array[j+1].line_number = aux;
            }
        }
    }
}
//BubbleSort(rec_array);
let i=0;
let j=0;
function bubble_sorting(){
    if (i < rec_array.length){
        if ( j < rec_array.length-i-1){
            if (rec_array[j].line_number > rec_array[j+1].line_number){
                aux = rec_array[j].line_number;
                rec_array[j].line_number = rec_array[j+1].line_number;
                rec_array[j+1].line_number = aux;

                rec_array[j].clear();
                rec_array[j].draw("#a19360");
                
                rec_array[j+1].clear();
                rec_array[j+1].draw();
            }
            j++;
        }
        else{
            j=0;
            i++;
        }
    }
    else{
        elapsed_time = Date.now() - date_of_starting;
        clearInterval(sorting_interval);
        sorting_interval = null;
        console.log("It took " + elapsed_time/1000 + "s");
    }
}
let date_of_starting = 0;
let elapsed_time = 0;
let sorting_interval = null;

document.getElementById('bubble').addEventListener('click', ()=>{
    console.log(rec_array);
    if (sorting_interval === null){
        i=0;
        j=0;
        date_of_starting = Date.now();
        sorting_interval = setInterval(bubble_sorting,1);
        console.log("Bubble -- sorting_interval set.");
    }
})

document.getElementById('insertion').addEventListener('click', ()=>{
    console.log("Insertion button clicked. "+ sorting_interval);
    if (sorting_interval === null){
        i=1;
        j=j-1;   
        aux = rec_array[i].line_number;
        sorting_interval = setInterval(insertion_sorting, 10);
        console.log("Insertion -- sorting_interval set.");
    }
})

// ctx.strokeStyle = "#FFFFFF";
// ctx.lineWidth = 2;
// ctx.beginPath();
// ctx.moveTo(40, 40);
// ctx.lineTo(100,0);
// ctx.stroke();

function insertion_sort() {
    //nombre des éléments dans le tableau
    var len = rec_array.length;       
    var aux, i, j;                  
    
    for(i = 1; i < len; i++) {
        //stocker la valeur actuelle 
        aux = rec_array[i].line_number;
        j = i - 1;
        while (j >= 0 && rec_array[j].line_number < aux) {
            rec_array[j+1].line_number = rec_array[j].line_number;
            j--;
        }
        rec_array[j+1].line_number = aux;
    }
}
var aux =null;
var last_j = i;
function insertion_sorting() {
    var len = rec_array.length;       
    if (i < len) {
        if (j >= 0 && rec_array[j].line_number < aux) {
            //to make them black again.
            if (j+1!=i){
                rec_array[j+1].clear();
                rec_array[j+1].draw();
            }
            rec_array[j+1].line_number = rec_array[j].line_number;
            rec_array[j].clear();
            rec_array[j].draw("#a19360");
            j--;
            // console.log("while loop");
        }
        else{
            rec_array[j+1].line_number = aux;
            rec_array[j+1].clear();
            rec_array[j+1].draw("#a10060");
            rec_array[last_j].clear();
            rec_array[last_j].draw();
            last_j = j+1;
            // rec_array[i].clear();
            // rec_array[i].draw();
            i++;
            j=i-1;
            if (i<len){
                aux = rec_array[i].line_number;
                rec_array[i].clear();
                rec_array[i].draw("#a19360");
            }
            // console.log("for loop");
        }
        if(j>=0){
            rec_array[j].clear();
            rec_array[j].draw();
        }
    }
    else{
        console.log("Insertion sorting is done.");
        clearInterval(sorting_interval);
        sorting_interval = null;
        console.log("sorting_interval set to null");
    }
    // console.log("Insertion sorting...");
}
//insertion_sorting();
// for(let i=0; i<rec_array.length;i++){
//     rec_array[i].clear();
//     rec_array[i].draw();
// }
