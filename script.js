const govApi = async (category) => {
    try {
        let apiUrl = `https://www.loc.gov/newspapers/?q=dog&fo=json`;
        
        if (category) {
            apiUrl += `&category=${category}`;
        }
        
        let response = await fetch(apiUrl);
        response = await response.json();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

govApi('sports');
