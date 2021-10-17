const arrayOfQuotes = [
    { 
     'quote': 'Small steps in the right direction can turn out to be the biggest step of your life.'
    },
    { 
     'quote': 'The purpose of our lives is to be happy.'
    },
    {
     'quote': 'The best revenge is massive success.'
    },
    {
     'quote': 'All we have is now.'
    },
    { 
     'quote': 'Life is much better when you are living in the present moment.'
    },
    {
     'quote': 'Understanding is an art.'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;    
}