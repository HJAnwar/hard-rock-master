document.getElementById('searchButton').addEventListener('click', () =>{
    document.getElementById('resultsArea').style.display = 'block' ;
    fetch(`https://api.lyrics.ovh/suggest/${document.getElementById('search-input').value }`)
    .then(res => res.json())
    .then(data => {
       for(let i = 0 ; i <= 10 ; i++){
          let songName = data.data[i].title ; 
          let artistName = data.data[i].artist.name ;
          document.getElementsByClassName('lyrics-name').item(i).innerText = `${songName}`;
          document.getElementsByClassName('author-lead').item(i).innerText = `${artistName}`;
          document.getElementsByClassName('get-lyrics').item(i).addEventListener('click' , () => {
             fetch(`https://api.lyrics.ovh/v1/${artistName}/${songName}`)
             .then(res => res.json())
             .then(data => { 
                document.getElementsByClassName('lyrics-title').item(i).innerText = `${songName} by ${artistName}`;
                document.getElementsByClassName('lyrics-body').item(i).innerText = data.lyrics ;
                
             })
          })
          
       }
    })
  })