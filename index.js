let lap=0;
let min=0;
let sec=0;
let micsec=0;
let timeout=null;
document.getElementById('start').onclick=()=>{
   stopwatch();
}
document.getElementById('stop').onclick=()=>{
    if(timeout!==null){
        clearTimeout(timeout);
    }
 }
 document.getElementById('reset').onclick=()=>{
    min=0;
    sec=0;
    micsec=0;
    lap=0;
    if(timeout!==null){
        clearTimeout(timeout);
    }
    let time = document.getElementById('time');
    time.innerHTML=`00:00:00` ;
    let laphtml = document.getElementById('laptext');
    laphtml.innerHTML=``
    document.getElementById('laps').innerHTML="";
 }
document.getElementById('lap').onclick=()=>{
    let laphtml = document.getElementById('laptext');
    lap+=1;
    laphtml.innerHTML=`Lap ${lap}: ${min<10? '0'+min:min}:${sec<10? '0'+sec:sec}:${micsec<10? '0'+micsec:micsec}`
    let label = document.createElement('label');
    label.className="list"
    let laps=document.getElementById('laps');
    laps.appendChild(label);
    label.innerHTML=`Lap ${lap}: ${min<10? '0'+min:min}:${sec<10? '0'+sec:sec}:${micsec<10? '0'+micsec:micsec}`;
}
function stopwatch(){
    micsec+=1; 
    if(micsec==60){
        sec+=1
        micsec=0;
    }
    if(sec==60){
        min+=1;
        sec=0;
        micsec=0;
    }
    if(min==60)
    {
        return ;
    }

    console.log(min,sec,micsec);
    let time = document.getElementById('time');
    time.innerHTML=`${min<10? '0'+min:min}:${sec<10? '0'+sec:sec}:${micsec<10? '0'+micsec:micsec}` ;
    timeout = setTimeout(stopwatch,10);
}