

fetch('scripts/exec-team.json')
    .then(response => response.json())
    .then(data => {
        const directors = data.Directors;

        let directorHTMLstr = ``
        for (const directorName of Object.keys(directors)) {
            let urlHTMLstr = ``
            for (const link of directors[directorName].links) urlHTMLstr += `<a href="${link.href}">${link.linkText}</a>`

            let gridStr = `s12 m6 xl4`
            let colStr = `green darken-2`
            if (directors[directorName].role === `Main Director`) { gridStr = `s12 m8 offset-m2 xl4`; colStr = `teal` }

            directorHTMLstr += `
                <div class="col ${gridStr}">
                    <div class="card ${colStr}">
                        <div class="card-image">
                            <img src="${directors[directorName].imagePath}">
                            <span class="card-title"><b>${directorName}</b></span>
                        </div>
                        <div class="card-content white-text">
                            <h4 class="center">${directors[directorName].role}</h4>
                            <p>${directors[directorName].description}</p>
                        </div>
                        <div class="card-action">
                            ${urlHTMLstr}
                        </div>
                    </div>
                </div>
            `
        }
        document.getElementById('Directors').innerHTML = directorHTMLstr;

        const developers = data.Developers;
        let developerHTMLstr = ``
        for (const developerName of Object.keys(developers)) {
            let urlHTMLstr = ``
            for (const link of developers[developerName].links) urlHTMLstr += `<a href="${link.href}">${link.linkText}</a>`

            developerHTMLstr += `
                <div class="col s12 m6">
                    <div class="card blue-grey darken-1">
                        <div class="card-image">
                            <img src="${developers[developerName].imagePath}">
                            <span class="card-title"><b>${developerName}</b></span>
                        </div>
                        <div class="card-content white-text">
                            <h4 class="center">${developers[developerName].role}</h4>
                            <p>${developers[developerName].description}</p>
                        </div>
                        <div class="card-action">
                            ${urlHTMLstr}
                        </div>
                    </div>
                </div>
            `
        }
        document.getElementById('Developers').innerHTML = developerHTMLstr;

        const operations = data.Operations;
        let operationHTMLstr = ``
        for (const operationName of Object.keys(operations)) {
            let urlHTMLstr = ``
            for (const link of operations[operationName].links) urlHTMLstr += `<a href="${link.href}">${link.linkText}</a>`

            operationHTMLstr += `
                <div class="col s12 m6 xl4">
                    <div class="card blue accent-4">
                        <div class="card-image">
                            <img src="${operations[operationName].imagePath}">
                            <span class="card-title"><b>${operationName}</b></span>
                        </div>
                        <div class="card-content white-text">
                            <h4 class="center">${operations[operationName].role}</h4>
                            <p>${operations[operationName].description}</p>
                        </div>
                        <div class="card-action">
                            ${urlHTMLstr}
                        </div>
                    </div>
                </div>
            `
        }
        document.getElementById('Operations').innerHTML = operationHTMLstr;

        const filmCrew = data['Film Crew'];
        let filmCrewHTMLstr = ``
        for (const filmCrewName of Object.keys(filmCrew)) {
            let urlHTMLstr = ``
            for (const link of filmCrew[filmCrewName].links) urlHTMLstr += `<a href="${link.href}">${link.linkText}</a>`

            filmCrewHTMLstr += `
                <div class="col s12 m6 xl4">
                    <div class="card purple accent-4">
                        <div class="card-image">
                            <img src="${filmCrew[filmCrewName].imagePath}">
                            <span class="card-title"><b>${filmCrewName}</b></span>
                        </div>
                        <div class="card-content white-text">
                            <h4 class="center">${filmCrew[filmCrewName].role}</h4>
                            <p>${filmCrew[filmCrewName].description}</p>
                        </div>
                        <div class="card-action">
                            ${urlHTMLstr}
                        </div>
                    </div>
                </div>
            `
        }
        document.getElementById('FilmCrew').innerHTML = filmCrewHTMLstr;

    })
    .catch(error => {
        console.error('Error loading JSON file:', error);
    });