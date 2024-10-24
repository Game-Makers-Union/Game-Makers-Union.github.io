

fetch('scripts/exec-team.json')
    .then(response => response.json())
    .then(data => {
        const directors = data.Directors;

        let directorHTMLstr = ``
        for (const directorName of Object.keys(directors)) {
            let urlHTMLstr = ``
            for (const link of directors[directorName].links) urlHTMLstr += `<a href="${link.href}">${link.linkText}</a>`

            let gridStr = `s12 m6 l4`
            let colStr = `green darken-1`
            if (directors[directorName].role === `Main Director`) { gridStr = `s12 l4`; colStr = `teal lighten-1` }

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
                <div class="col s12 m6 l4">
                    <div class="card blue accent-4">
                        <div class="card-image">
                            <img src="${developers[developerName].imagePath}">
                            <span class="card-title"><b>${developerName}</b></span>
                        </div>
                        <div class="card-content white-text">
                            <h4 class="center">Developer</h4>
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

    })
    .catch(error => {
        console.error('Error loading JSON file:', error);
    });