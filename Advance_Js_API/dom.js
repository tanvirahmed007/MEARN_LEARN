document.getElementById('add-border').addEventListener('click', function() {
    const container = document.getElementById('friend-section');
    container.style.border = '1px solid red';
});

function changeBackground(){
    const friend_paras = document.getElementsByClassName('friend_para');
    for (const friend_para of friend_paras) {
        friend_para.style.backgroundColor = 'yellow';
    
    };
};
