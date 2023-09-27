let myNameArray1 = ["Abdul Rehman","Hamza","Harris","Huzaifa"]

let myMessage1:string = "would you like to learn python?\n"


console.log(myNameArray1[0]+myMessage1, myNameArray1[1]+myMessage1, myNameArray1[2]+myMessage1, myNameArray1[3]+myMessage1)



//second method of this code 



let myNameArray2 = ["Abdul Rehman","Hamza","Harris","Huzaifa"]

let myMessage2:string = "would you like to learn python?\n"

let myMessage3:string = ` ${myNameArray2[0]} ${myMessage2} ${myNameArray2[1]} ${myMessage2} ${myNameArray2[2]} ${myMessage2} ${myNameArray2[3]} ${myMessage2} `

console.log(myMessage3);