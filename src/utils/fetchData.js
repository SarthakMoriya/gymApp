export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': "c3f5d622b2mshda9a268f7a25162p12660ajsn7c4b7d9e3d53",
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const fetchData=async(url,options)=>{
    const response=await fetch(url,options);
    const data=await response.json();
    return data;
}

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': "c3f5d622b2mshda9a268f7a25162p12660ajsn7c4b7d9e3d53",
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };