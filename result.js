const InputResult = document.querySelector("#input-result")

InputResult.addEventListener("keydown", function(event){
    if(event.code ==="Enter"){
        result();
    }
})
function result(){
    const input = InputResult.value ;

    window.location.href = "https://www.google.com/search?q="+ input +"&rlz=1C1CHZN_enIN979IN979&oq="+ input +"&aqs=chrome.0.0i355i433i512j46i340i433i512l2j0i131i433i512j46i340i433i512j0i131i433i650j0i512j0i131i433i512l2j0i271.2455j0j15&sourceid=chrome&ie=UTF-8#bsht=CgVic2hocBIECAQwAQ"
}