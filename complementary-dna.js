function DNAStrand(dna){
  dna = dna.replace(/A/g, 't');
  dna = dna.replace(/T/g, 'a');
  dna = dna.replace(/C/g, 'g');
  dna = dna.replace(/G/g, 'c');

  return dna.toUpperCase();
}

console.log(DNAStrand("AAAA"),"TTTT","String AAAA is");
console.log(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
console.log(DNAStrand("GTAT"),"CATA","String GTAT is");