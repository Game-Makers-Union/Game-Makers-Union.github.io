fetch('scripts/exec-team.json')
    .then(response => response.json())
    .then(data => {
        // --- START OF DIRECTORS ---
        const directors = data.Directors;
        let directorHTMLstr = ``
        let directorIndex = 0
        for (const directorName of Object.keys(directors)) {
            let urlHTMLstr = `<ul>`
            for (const link of directors[directorName].links) urlHTMLstr += `<li><a href="${link.href}">${link.linkText}</a></li>`
            urlHTMLstr += `</ul>`

            let gridStr = `s12 m6 l4`
            let colorStr = `green darken-2`
            if (directors[directorName].role === "Main Director") colorStr = `teal darken-1`
            // Main Director should ALWAYS be the first entry in the `exec-team.json` file!

            directorHTMLstr += `
                <div class="col ${gridStr}">
                    <div class="card ${colorStr}">
                        <div class="card-image">
                            <img src="${directors[directorName].imagePath}">
                            <span class="card-title"><b>${directorName}</b></span>
                        </div>
                        <div class="card-content">
                            <h5 class="center">${directors[directorName].role}</h5>
                            <p>${directors[directorName].description}</p>
                        </div>
                        <div class="card-action black">
                            ${urlHTMLstr}
                        </div>
                    </div>
                </div>
            `

            // if (directorIndex === 0) directorHTMLstr = `<div class="row">${directorHTMLstr}</div>`
            // else if (directorIndex % 2 === 1) directorHTMLstr = `<div class="row">${directorHTMLstr}`
            // else if (directorIndex % 2 === 0 || directorIndex === Object.keys(directors).length - 1) directorHTMLstr = `${directorHTMLstr}</div>`

            // directorIndex++
        }
        document.getElementById('Directors').innerHTML = directorHTMLstr;
        // --- END OF DIRECTORS ---

        // --- START OF DEVELOPERS ---
        const developers = data.Developers;
        let developerHTMLstr = ``
        let developerIndex = 0
        for (const developerName of Object.keys(developers)) {
            let urlHTMLstr = `<ul>`
            for (const link of developers[developerName].links) urlHTMLstr += `<li><a href="${link.href}">${link.linkText}</a></li>`
            urlHTMLstr += `</ul>`

            developerHTMLstr += `
                <div class="col s12 m6 l3">
                    <div class="card blue-grey darken-2">
                        <div class="card-image">
                            <img src="${developers[developerName].imagePath}">
                            <span class="card-title"><b>${developerName}</b></span>
                        </div>
                        <div class="card-content">
                            <h5 class="center">${developers[developerName].role}</h5>
                            <p>${developers[developerName].description}</p>
                        </div>
                        <div class="card-action black">
                            ${urlHTMLstr}
                        </div>
                    </div>
                </div>
            `

            if (developerIndex % 4 === 0) developerHTMLstr = `<div class="row">${developerHTMLstr}`
            else if (developerIndex % 4 === 3 || developerIndex === Object.keys(developers).length - 1) developerHTMLstr = `${developerHTMLstr}</div>`

            developerIndex++
        }
        document.getElementById('Developers').innerHTML = developerHTMLstr;
        // --- END OF DEVELOPERS ---

        // --- START OF OPERATIONS ---
        const operations = data.Operations;
        let operationHTMLstr = ``
        let operationIndex = 0
        for (const operationName of Object.keys(operations)) {
            let urlHTMLstr = `<ul>`
            for (const link of operations[operationName].links) urlHTMLstr += `<li><a href="${link.href}">${link.linkText}</a></li>`
            urlHTMLstr += `</ul>`

            operationHTMLstr += `
                <div class="col s12 m6 l3">
                    <div class="card blue darken-3">
                        <div class="card-image">
                            <img src="${operations[operationName].imagePath}">
                            <span class="card-title"><b>${operationName}</b></span>
                        </div>
                        <div class="card-content">
                            <h5 class="center">${operations[operationName].role}</h5>
                            <p>${operations[operationName].description}</p>
                        </div>
                        <div class="card-action black">
                            ${urlHTMLstr}
                        </div>
                    </div>
                </div>
            `

            if (operationIndex % 4 === 0) operationHTMLstr = `<div class="row">${operationHTMLstr}`
            else if (operationIndex % 4 === 3 || operationIndex === Object.keys(operations).length - 1) operationHTMLstr = `${operationHTMLstr}</div>`

            operationIndex++
        }
        document.getElementById('Operations').innerHTML = operationHTMLstr;

        const filmCrew = data['Film Crew'];
        let filmCrewHTMLstr = ``
        let filmCrewIndex = 0
        for (const filmCrewName of Object.keys(filmCrew)) {
            let urlHTMLstr = `<ul>`
            for (const link of filmCrew[filmCrewName].links) urlHTMLstr += `<li><a href="${link.href}">${link.linkText}</a></li>`
            urlHTMLstr += `</ul>`

            filmCrewHTMLstr += `
                <div class="col s12 m6 l3">
                    <div class="card deep-purple lighten-1">
                        <div class="card-image">
                            <img src="${filmCrew[filmCrewName].imagePath}">
                            <span class="card-title"><b>${filmCrewName}</b></span>
                        </div>
                        <div class="card-content">
                            <h5 class="center">${filmCrew[filmCrewName].role}</h5>
                            <p>${filmCrew[filmCrewName].description}</p>
                        </div>
                        <div class="card-action black">
                            ${urlHTMLstr}
                        </div>
                    </div>
                </div>
            `

            if (filmCrewIndex % 4 === 0) filmCrewHTMLstr = `<div class="row">${filmCrewHTMLstr}`
            else if (filmCrewIndex % 4 === 3 || filmCrewIndex === Object.keys(filmCrew).length - 1) filmCrewHTMLstr = `${filmCrewHTMLstr}</div>`

            filmCrewIndex++
        }
        document.getElementById('FilmCrew').innerHTML = filmCrewHTMLstr;

    })
    .catch(error => {
        console.error('Error loading JSON file:', error);
    });