const first = document.getElementById('searchButton')
first.addEventListener('click', function(){
    const second = document.getElementById('resultsArea')
    second.style.display = 'block';
    fetch(`https://api.lyrics.ovh/suggest/${document.getElementById('search-input').value }`)
    .then(res => res.json())
    .then(data => {
       for(let i = 0 ; i <= 10 ; i++){
          let songName = data.data[i].title ; 
          let artistName = data.data[i].artist.name ;
          const tin = document.getElementsByClassName('lyrics-name');
          tin.item(i).innerText = `${songName}`;
          const car = document.getElementsByClassName('author-lead');
          car.item(i).innerText = `${artistName}`;
          const pac = document.getElementsByClassName('get-lyrics');
          pac.item(i).addEventListener('click' , function(){
             fetch(`https://api.lyrics.ovh/v1/${artistName}/${songName}`)
             .then(res => res.json())
             .then(data => { 
                const choy = document.getElementsByClassName('lyrics-title');
                choy.item(i).innerText = `${songName} by ${artistName}`;
                const sat = document.getElementsByClassName('lyrics-body');
                sat.item(i).innerText = data.lyrics ;
                
             })
          })
          
       }
    })
  })