export const getHttpGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=5&api_key=myfK9Uc6gcogNkaCf5TAGLv4oiMt5H5d`
    const {data} = await fetch(url).then(res => res.json()); 
    
    return data.map(({id, title, images:{downsized_medium:{url}}})=>{
        return {
            id,
            title,
            gif:url
        }
    })
}