function changeTab(tab) {
    $(document).ready(function(){
        switch (tab) {
            case 0:
                $('#content').load('../pages/comuninty.html');
                
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

 /* $(document).ready(function(){
        $('#content').load('../components/header.html')}); */