//1) Write a JavaScript function to get an array and to read the first element of an array. 
//Check whether it is prime or not. 

let arr=[18,2,3,4];

function checkprime(arr2)
{
    var num=arr2[0];

     var flag=0;

for(i=1;i<=num; i++)
{
    if(num%i==0)
    {
        
flag=flag+1;
    }}
    return flag;
}
result= checkprime(arr);


    if(result==2)
    {
        console.log(arr[0]+ " is a prime number")
    }
    else{
        console.log(arr[0]+" is not a prime number")
    }


    // 2) Write a JavaScript program to find the most frequent item of an array

   var arr2=[9,1,0,9,9,2]
   var maxfreq=0; 

   function FreqArray(arr2)
   {

   var mostfreqitem;      

for(i=0; i<=arr2.length-1; i++)

{
    var freqcount=0;
    for(j=0;j<=arr2.length-1; j++)

{
    if(arr2[i]==arr2[j])
    {
freqcount=freqcount+1;

    }
}
    if(freqcount> maxfreq)
    {
    maxfreq=freqcount;
    mostfreqitem= arr2[i];
    }   
   
}
return mostfreqitem;
}MostFreqItem= FreqArray(arr2)
console.log(MostFreqItem+" is most frequent item  " + maxfreq+" times");

//3) Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, 
//check if the current number is odd or even, and display the message to the screen as odd or even.

for(i=0; i<=15; i++)
{
    if(i==0)
    {
        console.log("zero is even");
    }
    else if (i%2==0)
    {
        console.log(i+" is even");
    }
    else{
        console.log(i+ "  is odd");
    }
}

    // Write a JavaScript program to find the sum of squares of the elements of an array.

    let sumarray=[10,6,2,4];
    let sum=0;
    for( k=0; k<sumarray.length;k++)
    {
        sum=sum+(sumarray[k]*sumarray[k])
    }
console.log(sum);
