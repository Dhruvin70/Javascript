document.addEventListener("DOMContentLoaded", function () {
    // Define the image gallery data
    const galleryData = [
        {
            filename: "flowers-pink",
            title: "Pink Flowers",
            credit: "Photo by John Doe"
        },
        {
            filename: "flowers-red",
            title: "Red Flowers",
            credit: "Photo by Jane Smith"
        },
        {
            filename: "flowers-yellow",
            title: "Yellow Flowers",
            credit: "Photo by Mark Johnson"
        },
        {
            filename: "flowers-white",
            title: "Yellow Flowers",
            credit: "Photo by Mark Johnson"
        },
        {
            filename: "flowers-purple",
            title: "Yellow Flowers",
            credit: "Photo by Mark Johnson"
        }
    ];

    // Get the featured image and image caption elements
    const featuredImage = document.getElementById("featured-image");
    const imageCaption = document.getElementById("image-caption");

    // Get the thumbnail list element
    const thumbnailList = document.getElementById("thumbnail-list");

    // Display the first image in the gallery
    const firstImage = galleryData[0];
    featuredImage.src = `images/${firstImage.filename}-large.jpg`;
    imageCaption.textContent = firstImage.title;

    // Populate the thumbnail list dynamically
    galleryData.forEach(function (imageData) {
        const thumbnailItem = document.createElement("li");
        const thumbnailImage = document.createElement("img");
        thumbnailImage.src = `images/${imageData.filename}-small.jpg`;
        thumbnailImage.alt = imageData.title;
        thumbnailImage.width = 240;
        thumbnailImage.height = 160;
        thumbnailImage.addEventListener("click", function () {
            featuredImage.src = `images/${imageData.filename}-large.jpg`;
            imageCaption.textContent = imageData.title;

            // Remove the "active" class from all thumbnail images
            const thumbnailImages = thumbnailList.querySelectorAll("img");
            thumbnailImages.forEach(function (img) {
                img.classList.remove("active");
            });

            // Add the "active" class to the clicked thumbnail image
            this.classList.add("active");
        });

        thumbnailItem.appendChild(thumbnailImage);
        thumbnailList.appendChild(thumbnailItem);
    });

    // Add the "active" class to the first thumbnail image
    const firstThumbnailImage = thumbnailList.querySelector("img");
    firstThumbnailImage.classList.add("active");
});
