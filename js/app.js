var dragItem=document.querySelectorAll("#dragArea .drag-item")
var dropArea=document.getElementById("dropArea")
for(var i=0;i<dragItem.length;i++){
    dragItem[i].addEventListener("dragstart",function(ilkin){
        ilkin.dataTransfer.setData("ilkinId",this.id)

    })
}
dropArea.addEventListener("dragover",function(a){
    a.preventDefault()
    dropArea.style.background="green"
})
dropArea.addEventListener("dragleave",function(){
dropArea.style.background="transparent"
})
dropArea.addEventListener("drop",function(a){
    var dtId= a.dataTransfer.getData("ilkinId")
    var dtItem=document.getElementById(dtId)
    dropArea.appendChild(dtItem);
    dropArea.style.background="transparent"
})