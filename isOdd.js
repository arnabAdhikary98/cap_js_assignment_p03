function isOdd(n) {
    for(let i=0; i<n; i++)
    {
        if(i%2 !==0)
        {
            console.log(i, "is a odd number", true)
        }
        else
        {
            continue
        }
    }
}

isOdd(33)