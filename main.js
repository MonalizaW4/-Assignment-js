var bt = document.getElementById('bt');
//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {'author': 'Elbert Hubbard', 
     'quote': 'A friend is someone who knows all about you and still loves you.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Mae West', 
     'quote': 'You only live once, but if you do it right, once is enough.'
    },
    {'author': 'Marcus Tullius Cicero', 
     'quote': 'A room without books is like a body without a soul.'
    },
    {'author': 'Oscar Wilde', 
    'quote': 'Be yourself; everyone else is already taken.'
   },
];
bt.onclick=function(){
    generateQuote()
}
function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
}