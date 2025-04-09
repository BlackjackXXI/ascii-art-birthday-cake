const cake = `

.          _..._  ,s$$$s.
         .$$$$$$$s$$ss$$$$,
         $$$sss$$$$s$$$$$$$
         $$ss$$$$$$$$$$$$$$                                   (             )
         '$$$s$$$$$$$$$$$$'                           )      (*)           (*)      (
          '$$$$$$$$$$$$$$'                           (*)      |             |      (*)
            S$$$$$$$$$$$'                             |      |~|           |~|      |
             '$$$$$$$$$'                             |~|     | |           | |     |~|
               '$$$$$'                               | |     | |           | |     | |
                '$$$'                               ,| |a@@@@| |@@@@@@@@@@@| |@@@@a| |.
                  ;                            .,a@@@| |@@@@@| |@@@@@@@@@@@| |@@@@@| |@@@@a,.
                 ;                           ,a@@@@@@| |@@@@@@@@@@@@.@@@@@@@@@@@@@@| |@@@@@@@a,
                 ;                          a@@@@@@@@@@@@@@@@@@@@@' . \`@@@@@@@@@@@@@@@@@@@@@@@@a
                 ',                         ;\`@@@@@@@@@@@@@@@@@@'   .   \`@@@@@@@@@@@@@@@@@@@@@';
                  ;                         ;@@@\`@@@@@@@@@@@@@'     .     \`@@@@@@@@@@@@@@@@'@@@;
                 ,'                         ;@@@;,.aaaaaaaaaa       .       aaaaa,,aaaaaaa,;@@@;
                 ;                          ;;@;;;;@@@@@@@@;@      @.@      ;@@@;;;@@@@@@;;;;@@;
                 ',                         ;;;;;;;@@@@;@@;;@    @@ . @@    ;;@;;;;@@;@@@;;;;;;;
                  ',                        ;;;;;;;;@@;;;;;;;  @@   .   @@  ;;;;;;;;;;;@@;;;;@;;
                   ;                        ;;;;;;;;;;;;;;;;;@@     .     @@;;;;;;;;;;;;;;;;@@@;
                  '                     ,%%%;;;;;;;;@;;;;;;;;       .       ;;;;;;;;;;;;;;;;@@;;%%%,                  
                                     .%%%%%%;;;;;;;@@;;;;;;;;     ,%%%,     ;;;;;;;;;;;;;;;;;;;;%%%%%%,
                                    .%%%%%%%;;;;;;;@@;;;;;;;;   ,%%%%%%%,   ;;;;;;;;;;;;;;;;;;;;%%%%%%%,
                                    %%%%%%%%\`;;;;;;;;;;;;;;;;  %%%%%%%%%%%  ;;;;;;;;;;;;;;;;;;;'%%%%%%%%
                                    %%%%%%%%%%%%\`;;;;;;;;;;;;,%%%%%%%%%%%%%,;;;;;;;;;;;;;;;'%%%%%%%%%%%%
                                    \`%%%%%%%%%%%%%%%%%,,,,,,,%%%%%%%%%%%%%%%,,,,,,,%%%%%%%%%%%%%%%%%%%%'
                                      \`%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'
                                          \`%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'
                                                 """"""""""""""\`,,,,,,,,,'"""""""""""""""""
                                                                \`%%%%%%%'
                                                                 \`%%%%%'
                                                                   %%%
                                                                  %%%%%
                                                               .,%%%%%%%,.
                                                          ,%%%%%%%%%%%%%%%%%%%, 

.
`;

const wish = `
 /$$   /$$                                               /$$       /$$             /$$     /$$             /$$
| $$  | $$                                              | $$      |__/            | $$    | $$            | $$
| $$  | $$  /$$$$$$   /$$$$$$   /$$$$$$  /$$   /$$      | $$$$$$$  /$$  /$$$$$$  /$$$$$$  | $$$$$$$   /$$$$$$$  /$$$$$$  /$$   /$$
| $$$$$$$$ |____  $$ /$$__  $$ /$$__  $$| $$  | $$      | $$__  $$| $$ /$$__  $$|_  $$_/  | $$__  $$ /$$__  $$ |____  $$| $$  | $$
| $$__  $$  /$$$$$$$| $$  \\ $$| $$  \\ $$| $$  | $$      | $$  \\ $$| $$| $$  \\__/  | $$    | $$  \\ $$| $$  | $$  /$$$$$$$| $$  | $$
| $$  | $$ /$$__  $$| $$  | $$| $$  | $$| $$  | $$      | $$  | $$| $$| $$        | $$ /$$| $$  | $$| $$  | $$ /$$__  $$| $$  | $$
| $$  | $$|  $$$$$$$| $$$$$$$/| $$$$$$$/|  $$$$$$$      | $$$$$$$/| $$| $$        |  $$$$/| $$  | $$|  $$$$$$$|  $$$$$$$|  $$$$$$$
|__/  |__/ \\_______/| $$____/ | $$____/  \\____  $$      |_______/ |__/|__/         \\___/  |__/  |__/ \\_______/ \\_______/ \\____  $$
                    | $$      | $$       /$$  | $$                                                                       /$$  | $$
                    | $$      | $$      |  $$$$$$/                                                                      |  $$$$$$/
                    |__/      |__/       \\______/                                                                        \\______/
`;

const cake = `...`;  // Your cake ASCII here
const wish = `...`;  // Your birthday wish ASCII here

const button = document.getElementById('surprise-btn');
const ascii = document.getElementById('ascii-output');
const music = document.getElementById('bday-music');

function printWithDelay(text, delay = 50) {
  const lines = text.trim().split('\n');
  let i = 0;
  const interval = setInterval(() => {
    if (i >= lines.length) return clearInterval(interval);
    ascii.textContent += lines[i++] + '\n';
  }, delay);
}

button.addEventListener('click', () => {
  button.style.display = 'none';
  ascii.style.display = 'block';

  music.play().catch(() => console.warn('Autoplay blocked'));
  
  printWithDelay(cake, 40);
  setTimeout(() => printWithDelay(wish, 40), cake.split('\n').length * 40 + 500);
});
