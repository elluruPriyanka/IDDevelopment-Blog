let output = document.getElementsByTagName('li')
for (i=0;i<output.length; i++)
{
    if(output[i].classList.contain("hot"))
    {
       output[i].className="cool"
       break
    }
}