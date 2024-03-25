const btn = document.querySelector('.showtitle');
const displaytitle = document.querySelector('.title');
btn.addEventListener('click', async()=>{
       let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

       chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: titlepick(tab.title),
    });
});

function titlepick(x){
    try{
         console.log(x);
         displaytitle.innerHTML = x;
         navigator.clipboard.writeText(x);
    }catch(err){
        console.log(err);
    }
 
}