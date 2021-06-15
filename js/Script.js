let licenseAmount = document.getElementById('span-').innerHTML;
let licenseIdInfo = document.getElementById('licenseOne').innerHTML;
let priceInfo = document.getElementById('licenseOnePrice').innerHTML;

selectFirstLicense();
function getdetails(obj) {
    let InfoFromDom = obj.parentElement.children[1].children;
    licenseIdInfo= InfoFromDom[0].children[0].innerHTML;
    priceInfo= InfoFromDom[1].children[0].innerHTML;
    getStyle(obj.parentElement.parentElement);
    showInfo(licenseIdInfo,priceInfo);
}

function getStyle(from){
    let inputsArr = [
    document.querySelector("#raButOne"),
    document.querySelector("#raButTwo"),
    document.querySelector("#raButThree")
    ]
    for(let i=0; i<inputsArr.length; i++){
        inputsArr[i].classList.remove("input--syle");
    }
    from.classList.add("input--syle");
}

$('.faux-select').click(function(){
    $(this).toggleClass('open');
    $('.options',this).toggleClass('open');
});

$('.options li').click(function(){
    licenseAmount = $(this).text();
    $('.price-info').html(priceInfo * licenseAmount)
    $('.selected-option span').text(licenseAmount);
});

function showInfo(_licenseIdInfo,_priceInfo){
    $('.license-info').html(_licenseIdInfo);
    $('.price-info').html(_priceInfo * licenseAmount)
}

function selectFirstLicense(){
    document.querySelector("#raButOne").classList.add("input--syle");
    showInfo(licenseIdInfo,priceInfo);
}