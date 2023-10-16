function changeTab(tab) {
    $(document).ready(function(){
        switch (tab) {
            case 0:
                $('#content').load('../pages/comunity.html');
                
                break;
            case 1:
                $('#content').load('../pages/chats.html');
                
                break;
            case 2:
                $('#content').load('../pages/status.html');
                
                break;
            case 3:
                $('#content').load('../pages/call.html');
                
                break;
        
            default:
                break;
        }
    });
}

 
window.onload=()=>{
    $(document).ready(function(){
        $('#header').load('../components/header.html')});
       
    }
