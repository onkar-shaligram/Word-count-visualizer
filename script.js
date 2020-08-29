

$('#btnCalc').click(()=> {
    let text = $('#inputText').val();
    let chars = text.split('');
    let newChars = [];
    chars.forEach(c => {
        switch(c){
            case ",":
            case ";":
            case "'":
            case "`":
            case ":":
            case `"`:
            case "-":
            case "_":
            case "“":
            case "”":
            case "!":
            case ".":
            case "’":
            case "?": return;
            default: newChars.push(c.toLowerCase());
        }
    });
    let newText = newChars.join('');
    console.log(newText);
});