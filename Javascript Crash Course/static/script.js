function ageInDays(){
    var birthdate = prompt('What is your birthdate?');
    var ageInDays = (2021-birthdate)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.creartTexNode('You are'+ ageInDays + 'Old days.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(testAnswer);
    document.getElementById('flex-box-result').appendChild(h1);


}
