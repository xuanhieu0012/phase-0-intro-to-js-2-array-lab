// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();

}
function appendCat(name){
  const coppyCat = [...cats, name];
   return coppyCat
}
function prependCat(name){
    const AddCat = [name, ...cats];
    return AddCat;
}
function removeLastCat(){
    const RemoveLast = cats.slice(0,-1);
    return RemoveLast

}
function removeFirstCat(){
    const RemoveFirst = cats.slice(1,cats.length);
    return RemoveFirst
}