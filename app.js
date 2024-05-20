document.addEventListener('DOMContentLoaded', function() {
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');
    const propertiesLink = document.getElementById('properties-link');
    const loginSection = document.getElementById('login-section');
    const registerSection = document.getElementById('register-section');
    const propertiesSection = document.getElementById('properties-section');
    const sellerSection = document.getElementById('seller-section');
    const addPropertyButton = document.getElementById('add-property');

    loginLink.addEventListener('click', function() {
        loginSection.classList.toggle('hidden');
        registerSection.classList.add('hidden');
        propertiesSection.classList.add('hidden');
        sellerSection.classList.add('hidden');
    });

    registerLink.addEventListener('click', function() {
        registerSection.classList.toggle('hidden');
        loginSection.classList.add('hidden');
        propertiesSection.classList.add('hidden');
        sellerSection.classList.add('hidden');
    });

    propertiesLink.addEventListener('click', function() {
        propertiesSection.classList.toggle('hidden');
        loginSection.classList.add('hidden');
        registerSection.classList.add('hidden');
        sellerSection.classList.add('hidden');
    });

    addPropertyButton.addEventListener('click', function() {
        // Code to add property (modal or form)
    });

    // Sample property list data
    const properties = [
        {
            id: 1,
            place: "New York",
            area: "1500 sqft",
            bedrooms: 3,
            bathrooms: 2,
            hospitals: "Hospital A",
            colleges: "College B",
            price: "$500,000"
        },
        {
            id: 2,
            place: "Los Angeles",
            area: "1800 sqft",
            bedrooms: 4,
            bathrooms: 3,
            hospitals: "Hospital C",
            colleges: "College D",
            price: "$650,000"
        }
    ];

    const propertyList = document.getElementById('property-list');

    function displayProperties() {
        propertyList.innerHTML = '';
        properties.forEach(property => {
            const propertyItem = document.createElement('div');
            propertyItem.className = 'property-item';
            propertyItem.innerHTML = `
                <h3>${property.place}</h3>
                <p>Area: ${property.area}</p>
                <p>Bedrooms: ${property.bedrooms}</p>
                <p>Bathrooms: ${property.bathrooms}</p>
                <p>Hospitals: ${property.hospitals}</p>
                <p>Colleges: ${property.colleges}</p>
                <p>Price: ${property.price}</p>
                <button class="interested-button" data-id="${property.id}">I'm Interested</button>
                <button class="like-button" data-id="${property.id}">Like (<span>0</span>)</button>
            `;
            propertyList.appendChild(propertyItem);
        });
    }

    displayProperties();

    // Event delegation for interested and like buttons
    propertyList.addEventListener('click', function(event) {
        if (event.target.classList.contains('interested-button')) {
            const propertyId = event.target.dataset.id;
            // Code to show seller details
            alert(`Interested in property ID: ${propertyId}`);
        } else if (event.target.classList.contains('like-button')) {
            const likeButton = event.target;
            const likeCountSpan = likeButton.querySelector('span');
            let likeCount = parseInt(likeCountSpan.textContent, 10);
            likeCount++;
            likeCountSpan.textContent = likeCount;
        }
    });

    // Handle form submissions (Login and Register)
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle login logic
        alert('Logged in successfully!');
    });

    document.getElementById('register-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle registration logic
        alert('Registered successfully!');
    });
});