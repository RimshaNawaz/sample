let cross=document.getElementById("cross")
let grid=document.getElementById("grid")
let sidebar=document.querySelector(".sidebar");
cross.style.display="none"
grid.addEventListener(("click"),()=>{
    sidebar.classList.toggle("sidebargo");
    if(sidebar.classList.contains("sidebargo"))
    {   grid.style.display="inline"
        cross.style.display="none"
    }
    else{
        grid.style.display="none"
        cross.style.display="inline"
    }
})
cross.addEventListener(("click"),()=>{
    sidebar.classList.toggle("sidebargo")
    grid.style.display="inline"
    cross.style.display="none"
})
