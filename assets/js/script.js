var GalleryLists = document.getElementById("gallery-list");

var Home = document.querySelector(".Home");
var SaveGallery = document.querySelector(".SaveGallery");
var ListGallery = document.querySelector(".ListGallery");
var Navigation = document.querySelectorAll('.navigation');
var textDiv = document.querySelector('.text'); // Target div for updates
var TitleArt = document.querySelector(".ArtTitle");
var DescriptionArt = document.querySelector(".ArtDescription");
var SelectedGallery = document.querySelector(".selected-gallery img");
var GalleryConta = document.querySelector(".selected-gallery ");
var ArtDate = document.querySelector(".ArtDate");
var Price = document.querySelector("#price");
var Aside = document.querySelector(".aside");
var GalleyFooter = document.querySelector(".galley-footer");
var BackBtn = document.querySelector(".back");


const ArtsSours = [
    { Title: 'Abstract Art Work', ImagePath: 'assets/images/adrianna-geo.jpg', Description: 'Art description', Price: '$199', date: '09-13-25' },
    { Title: 'Abstract Art Work Two', ImagePath: 'assets/images/europeana--k.jpg', Description: 'Art description two', Price: '$1000', date: '12-13-25' },
    { Title: 'Abstract Art Work Three', ImagePath: 'assets/images/europeana-K.jpg', Description: 'Art description three', Price: '$145', date: '06-15-25' },
    { Title: 'Abstract Art Work Three', ImagePath: 'assets/images/europeana-6.jpg', Description: 'Art description four', Price: '$145', date: '05-12-25' },
    { Title: 'Abstract Art Work Three', ImagePath: 'assets/images/europeana-q.jpg', Description: 'Art description five', Price: '$145', date: '03-23-25' },
    { Title: 'Abstract Art Work Three', ImagePath: 'assets/images/europeana-T.jpg', Description: 'Art description six', Price: '$145', date: '10-01-25' },
];

ArtsSours.forEach(art => {
    // Create a new <li> element
    const listItem = document.createElement('li');
    // Add the <span> for the title
    const titleSpan = document.createElement('span');
    titleSpan.textContent = art.Title;
    // Add the <img> for the image
    const imageElement = document.createElement('img');
    imageElement.src = art.ImagePath;
    // Append the <span> and <img> to the <li>
    listItem.appendChild(titleSpan);
    listItem.appendChild(imageElement);
    // Append the <li> to the GalleryList
    GalleryLists.appendChild(listItem);



});

ArtsSours.forEach(art => {
    // Create a new <li> element
    const listItem = document.createElement('li');
    // Add the <span> for the title
    const titleSpan = document.createElement('span');
    titleSpan.textContent = art.Title;
    // Add the <img> for the image
    const imageElement = document.createElement('img');
    imageElement.src = art.ImagePath;
    // Append the <span> and <img> to the <li>
    listItem.appendChild(titleSpan);
    listItem.appendChild(imageElement);
    // Append the <li> to the GalleryList

    ListGallery.appendChild(listItem);


});


var GalleryList = document.querySelectorAll("#gallery-list li");
var ListGallerys = document.querySelectorAll(".ListGallery li");





GalleryList.forEach((Lister, index) => {
    Lister.addEventListener('click', () => {
        SelectedGallery.style.opacity = 0;
        Price.style.opacity = 0;
        TitleArt.style.opacity = 0;
        TitleArt.style.filter = "blue";
        SelectedGallery.style.scale = ".95";
        TitleArt.innerHTML = ArtsSours[index].Title;
        DescriptionArt.innerHTML = ArtsSours[index].Description;
        Price.innerHTML = ArtsSours[index].Price;
        ArtDate.innerHTML = ArtsSours[index].date;


        setTimeout(function () {
            SelectedGallery.style.opacity = 1;
            SelectedGallery.src = ArtsSours[index].ImagePath;
            SelectedGallery.style.scale = "1";
            TitleArt.style.opacity = 1;
            Price.style.opacity = 1;
        }, 200)
        if (window.innerWidth <= 900) {
            MinWidth(true)
        }
    })

});

ListGallerys.forEach((Lister, index) => {
    Lister.addEventListener('click', () => {

        ChangePage(0)


        SelectedGallery.style.opacity = 0;
        Price.style.opacity = 0;
        TitleArt.style.opacity = 0;
        TitleArt.style.filter = "blue";
        SelectedGallery.style.scale = ".95";
        TitleArt.innerHTML = ArtsSours[index].Title;
        DescriptionArt.innerHTML = ArtsSours[index].Description;
        Price.innerHTML = ArtsSours[index].Price;
        ArtDate.innerHTML = ArtsSours[index].date;


        setTimeout(function () {
            SelectedGallery.style.opacity = 1;
            SelectedGallery.src = ArtsSours[index].ImagePath;
            SelectedGallery.style.scale = "1";
            TitleArt.style.opacity = 1;
            Price.style.opacity = 1;
        }, 200)
        if (window.innerWidth <= 900) {
            MinWidth(true)
        }
    })

});

function MinWidth(Index) {
    if (Index === true) {
        GalleryConta.style.display = "flex";
        Aside.style.display = 'flex';
        GalleyFooter.style.display = 'block';
        GalleryLists.style.display = 'none';
        BackBtn.style.flex = '1';
        BackBtn.style.opacity = '1';

    } else {
        GalleryConta.style.display = "none";

        Aside.style.display = 'none';
        GalleyFooter.style.display = 'none';
        GalleryLists.style.display = 'flex';
        BackBtn.style.flex = '0';
        BackBtn.style.opacity = '0';


    }


}


TitleArt.innerHTML = ArtsSours[0].Title;
DescriptionArt.innerHTML = ArtsSours[0].Description;
Price.innerHTML = ArtsSours[0].Price;
ArtDate.innerHTML = ArtsSours[0].date;
SelectedGallery.src = ArtsSours[0].ImagePath;

function openFullscreen() {
    if (SelectedGallery.requestFullscreen) {
        SelectedGallery.requestFullscreen();
    } else if (SelectedGallery.webkitRequestFullscreen) { /* Safari */
        SelectedGallery.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        SelectedGallery.msRequestFullscreen();
    }
}









function ChangePage(index) {
    var currentIndex = index;

    // Hide/Show Sections
    if (currentIndex === 0) {
        Home.style.display = 'flex';
        SaveGallery.style.display = 'none';
        ListGallery.style.display = 'none';
    } else if (currentIndex === 1) {
        Home.style.display = 'none';
        SaveGallery.style.display = 'flex';
        ListGallery.style.display = 'none';
    } else if (currentIndex === 2) {
        Home.style.display = 'none'; // Fixed from flex.display
        SaveGallery.style.display = 'none';
        ListGallery.style.display = 'flex';
    }

    // Navigation: Remove all active classes and set the current one
    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
    });

    // Assuming you have elements with ID nav-0, nav-1, nav-2
    document.getElementById(`nav-${currentIndex}`).classList.add("active");
}

ChangePage(0)