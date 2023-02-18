
function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberField.value ;
    const previousPhoneNumber = parseInt(phoneNumberFieldString);
    

    let newPoneNumber;
    if(isIncrease === true){
        newPoneNumber = previousPhoneNumber + 1;
    }else{
        newPoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPoneNumber;
    return newPoneNumber;

}



function updatePhoneTotalPrice(newPoneNumber){
    const phoneTotalPrice = newPoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPoneNumber);
    calculateSubTotal();
   
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPoneNumber);
    calculateSubTotal();

})
