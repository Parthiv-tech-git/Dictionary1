import { useState, } from 'react';
import './App.css';

function App() {


  const [word,setWord]=useState("")
  const [pa,setPa]=useState([])
   const [p,setP]=useState([])




  const check=async()=>{

    try {
     
       let a=  await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+word);
    console.log(a)
let b =await a.json();
console.log(b)
setP(b)
let defi= await b[0].meanings[0].definitions;
setPa(defi)
//console.log(defi);
//for(let l in defi){
 //console.log(defi[l])
//}
//defi.map((f)=>(
//console.log(f.definition)

  
//))

//defi.map((f,h)=>(
 // <li key={h}>{f.definition}</li>
  
//))


//t defi= await b;
//let defi= Object.values(await b[0].meanings[0].definitions[0])
//console.log(typeof(defi))
//let dei= await b[0].phonetics[2].text;
//setP(dei)

//console.log(defi[3].definition)
// setWord("")










    } catch (error) {
      alert("the data is not able")
    //setPa(  "data has not showing in sever side please try again properly")
   // console.log(error)
   
  //  let a=  await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+word);
  //  console.log(a)
  // let b =await a.json();
   // console.log(b);
  // let c = await b.message ;
 // console.log(c);
    
    
    }
   


  }



  return (
    <div className="App">
      <div className="sreach">
        <h1>simple dictionary </h1>
        
    <input type="search" placeholder='enter your word'  onChange={(e)=>setWord(e.target.value)} value={word} />
    <button onClick={check}>serach</button>
   
        </div>
 <div className="con">
  <p>word:{word}</p>

<h2> Definations of {word}</h2>
   <p>{pa.map((f,j)=>(

<li key={j}>{f.definition}</li>
  
))
}</p>
   

   <h4>{p.word}</h4>


 </div>




 <div className="footer">
    <p>Thank you for visting simple dictionary  application</p>
   <p>vist Again, HAVE GREAT DAY </p>
    <p>-MR.D. PARTHIV KUMAR </p>
   </div>

    </div>
  );
}

export default App;
