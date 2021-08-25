const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(musicas) {
  musicaCerta = musicas.find((musica) => musica.id === '31031685');
  return musicaCerta.title;
}

console.log(findMusic(musicas))