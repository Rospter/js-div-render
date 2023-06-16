const image = [

    {
        name: "image1",
        src: "image/1.jpg",
        description: "test alt1",
    },

    {
        name: "image2",
        src: "image/2.jpg",
        description: "test alt2",
    },
    
    {
        name: "image3",
        src: "image/3.jpg",
        description: "test alt3",
    },
    
    {
        name: "image4",
        src: "image/4.jpg",
        description: "test alt4",
    },
    
    {
        name: "image5",
        src: "image/5.jpg",
        description: "test alt5",
    },
    
    {
        name: "image6",
        src: "image/6.jpg",
        description: "test alt6",
    },

];

const generate = image.map(function(image){

const img = document.createElement("img");
img.src = image.src;
img.alt = image.description;


const div = document.createElement("div");
div.appendChild(img);

return div;

});


const imageContainer = document.getElementById("Image_container");
generate.forEach(function(div)
{
    imageContainer.appendChild(div);
})