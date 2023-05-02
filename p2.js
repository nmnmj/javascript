let n,s=0,i,r,b;
for(i=1;i<=372;i++){
    s=0;
    n=i;
    while(n>0){
        r=n%10;
        b =i.toString().length;
        s=s+Math.pow(r, b);
        n=parseInt(n/10);
    }
    if(s==i){
        document.write(`${i} is armstrong no.<br>`);
    }
    else{
        document.write(`${i} is not armstrong no.<br>`);
    }
}