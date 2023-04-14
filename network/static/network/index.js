
function getCookie(name)
{
    const value=`; ${document.cookie}`;
    const parts=value.split(`;${name}=`);
    if(parts.length==2) return parts.pop().split(';').shift();
}

function submitHandler(id)  
{
    const textareaValue=document.getElementById(`textarea_${id}`).value;
    fetch(`/edit/${id}`,{
        method:"POST",
        headers:{"Content-type":"application/json","X-CSRFToken":getCookie("csrftoken"),"Accept": "application/json",},
        body:JSON.stringify({
            content:textareaValue
        })
    })
    .then(function(response) { 
        response.json()
    })
    .then(function(result){
      console.log(result)
    })
}