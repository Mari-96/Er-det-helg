document.write("<pre>");

const date = new Date();
let dag = date.getDay();
let klokke = date.getHours();
let klokke2 = date.getHours();




if (dag === 5 || dag === 6 || dag === 0) {
  if (dag === 5 && klokke <16){
    document.writeln("Det er SNART helg!");
      } else {
        document.writeln("Det er HELG!");
          }
} else {
  document.write("Det er ikkje helg..")
}
