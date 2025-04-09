const cake = `
           _..._  ,s$$$s.
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
`;

const wish = `

 /$$   /$$                                               /$$       /$$             /$$     /$$             /$$
| $$  | $$                                              | $$      |__/            | $$    | $$            | $$
| $$  | $$  /$$$$$$   /$$$$$$   /$$$$$$  /$$   /$$      | $$$$$$$  /$$  /$$$$$$  /$$$$$$  | $$$$$$$   /$$$$$$$  /$$$$$$  /$$   /$$
| $$$$$$$$ |____  $$ /$$__  $$ /$$__  $$| $$  | $$      | $$__  $$| $$ /$$__  $$|_  $$_/  | $$__  $$ /$$__  $$ |____  $$| $$  | $$
| $$__  $$  /$$$$$$$| $$  \ $$| $$  \ $$| $$  | $$        | $$  \ $$| $$| $$  \__/  | $$    | $$  \ $$| $$  | $$  /$$$$$$$| $$  | $$
| $$  | $$ /$$__  $$| $$  | $$| $$  | $$| $$  | $$      | $$  | $$| $$| $$        | $$ /$$| $$  | $$| $$  | $$ /$$__  $$| $$  | $$
| $$  | $$|  $$$$$$$| $$$$$$$/| $$$$$$$/|  $$$$$$$      | $$$$$$$/| $$| $$        |  $$$$/| $$  | $$|  $$$$$$$|  $$$$$$$|  $$$$$$$
|__/  |__/ \_______/| $$____/ | $$____/  \____  $$      |_______/ |__/|__/         \___/  |__/  |__/ \_______/ \_______/ \____  $$
                    | $$      | $$       /$$  | $$                                                                       /$$  | $$
                    | $$      | $$      |  $$$$$$/                                                                      |  $$$$$$/
                    |__/      |__/       \______/                                                                        \______/
`;

const output = document.getElementById('ascii-output');

function printWithDelay(text, delay = 50) {
  const lines = text.trim().split('\n');
  let i = 0;
  const interval = setInterval(() => {
    if (i >= lines.length) return clearInterval(interval);
    output.textContent += lines[i++] + '\n';
  }, delay);
}

printWithDelay(cake, 50);
setTimeout(() => printWithDelay(wish, 50), cake.split('\n').length * 50 + 500);
