function installersApi(id, setInstaladores){
    let url = `https://app-challenge-api.herokuapp.com/installers?plan=${id}`;

    fetch(url)
    .then((r)=> r.json())
    .then((json)=>{
        setInstaladores(json)}
    )
}

export default installersApi;