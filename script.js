let dropdown=document.querySelectorAll(".slt");
let flag=document.querySelectorAll("img");
let amount=document.querySelector("#input");
let from=document.querySelector("#slt1");
let to=document.querySelector("#slt2");
let msg=document.querySelector(".msg");
const Base_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api";
let change=document.querySelector(".btn");


// logic to add all countries
for(let i=0;i<dropdown.length;i++){
    for(const code in countryList){
        let option=document.createElement("option");
        option.value=code;
        option.innerText=code;
        if(i==0 && code==="USD")
            option.selected="selected";
        else if(i==1 && code==="PKR")
            option.selected="selected";
        dropdown[i].appendChild(option);
    }

    dropdown[i].addEventListener("change",(evt)=>{
        updateflag(i,evt.target);
    })
}

// fun to change the flag
function updateflag(i,element){
    let fg=flag[i];
    let code=countryList[element.value];

    fg.src=`https://flagsapi.com/${code}/flat/64.png`;
}

// conversion
change.addEventListener("click",async (event)=>{
    console.log(amount);
    event.preventDefault();
    let response =await fetch(`${Base_URL}@2024-10-19/v1/currencies/${from.value.toLowerCase()}.json`);
    let data=await response.json();
    let rate = data[from.value.toLowerCase()][to.value.toLowerCase()];
    console.log(data[from.value.toLowerCase()][to.value.toLowerCase()]);
    let amtval=amount.value;
    let final=amtval*rate;

    msg.innerText=`${amtval} ${from.value}= ${final} ${to.value}`;
});
