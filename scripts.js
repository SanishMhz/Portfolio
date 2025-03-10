fetch('sections/about.html')
            .then(response => response.text())
            .then(data => document.getElementById('about').innerHTML = data);

        fetch('sections/projects.html')
            .then(response => response.text())
            .then(data => document.getElementById('projects').innerHTML = data);

        fetch('sections/contact.html')
            .then(response => response.text())
            .then(data => document.getElementById('contact').innerHTML = data);