

$('#btnCalc').click(()=> {
    let text = $('#inputText').val();
    let chars = text.split('');
    let newChars = [];
    chars.forEach(c => {
        newChars.push(c);
    });
    let newText = newChars.join('');
    console.log(newText);
});