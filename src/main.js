me = {
  "basics": {
    "firstName":"Ryan",
    "lastName": "Cross",
    "age": 26,
    "sex": "Male",
    "location": {
      "country": "United States",
      "state": "Missouri",
      "city": "Kansas City"
    },
    "occupation": "Senior Software Engineer",
    "employer": "Cerner Corporation",
    "label": "Software Engineer x Game Developer"
  },
  "about": {
    "paragraphOne": "Welcome. I'm Ryan and I'm a senior software engineer by day. I've spent the last few years in the HealthCare IT space @ Cerner; Building robust APIs and web applications for a range of healthcare concepts. I've been fortunate to work with a team of extremely talented engineers from which I have learned a great deal. Creating services that helps health organizations across the globe share important patient information quickly and with better confidence and trust.",
    "paragraphTwo": "In my non-working hours, my productive efforts shift towards my long-term dream of building games. Working in C# and the Unity engine building prototypes or reverse engineer a game mechanic I find intrigueing. You'll also frequently find me hacking away on absurd ideas at the nearest available Game Jam. Creating that tower defense dating sim you never knew you wanted.",
    "paragraphThree": "Occasionally I can be found visiting the outside world for huu-man interaction. Sometimes in the form of hiking and skiing when the weather permits; but more often you'll find me at the local board game bar, an up-and-coming venue trend I am eternally grateful for.",
    "paragraphFour": "If your interested in learning more about my industry work, head on over to my resume. For my passion projects, check out the projects page."
  },
  "copyright": {
    "disclaimer": "Contents of this site are © Copyright 2019-{0} Ryan Cross. All rights reserved. ",
    "github": "https://github.com/RyanCross/ryancross.github.io",
    "linkText": "Source",
    "licenseInfo": " code is available under the MIT license."
  } 
}

meLoremIpsum = {
  "about": {
    "paragraphOne": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Tristique senectus et netus et. Eu scelerisque felis imperdiet proin fermentum leo. Adipiscing elit ut aliquam purus sit amet luctus. Id aliquet risus feugiat in. In egestas erat imperdiet sed euismod. In ornare quam viverra orci sagittis eu volutpat odio. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt dui ut ornare lectus sit amet est placerat. Mollis nunc sed id semper risus in hendrerit gravida rutrum.",
    "paragraphTwo": "Ac tortor vitae purus faucibus ornare suspendisse. Mi ipsum faucibus vitae aliquet. Morbi enim nunc faucibus a pellentesque. Nec nam aliquam sem et tortor. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Molestie a iaculis at erat pellentesque adipiscing commodo. Ullamcorper velit sed ullamcorper morbi tincidunt. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Interdum posuere lorem ipsum dolor sit amet. Sit amet consectetur adipiscing elit. Mauris augue neque gravida in. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Nunc id cursus metus aliquam eleifend.",
    "paragraphThree": "Urna porttitor rhoncus dolor purus. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Scelerisque eu ultrices vitae auctor eu augue ut. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Amet mattis vulputate enim nulla aliquet porttitor. Bibendum neque egestas congue quisque egestas diam in. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Amet consectetur adipiscing elit ut aliquam. Sed augue lacus viverra vitae congue eu. Id porta nibh venenatis cras sed felis. Orci a scelerisque purus semper eget duis at. Odio eu feugiat pretium nibh ipsum consequat nisl. Massa massa ultricies mi quis hendrerit. Pharetra convallis posuere morbi leo urna molestie at elementum.",
    "paragraphFour": "Velit euismod in pellentesque massa placerat. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. A erat nam at lectus urna duis. Elementum nisi quis eleifend quam adipiscing vitae. Leo vel orci porta non pulvinar neque. Convallis posuere morbi leo urna molestie at elementum. Augue mauris augue neque gravida. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Volutpat consequat mauris nunc congue nisi vitae suscipit. Feugiat nisl pretium fusce id velit ut tortor pretium. Non quam lacus suspendisse faucibus interdum posuere. Bibendum ut tristique et egestas quis. Sed faucibus turpis in eu mi bibendum neque egestas. Quis commodo odio aenean sed adipiscing. Mauris nunc congue nisi vitae suscipit tellus."
  }
}

nav = {
  projects: "Projects",
  resume: "Resume",
  contact: "Contact",
  games: "Games"
}

imgs = {
  london: {
    path: "src/img/london.jpg",
    alt: "A selfie of Ryan at the London Globe theatre on a rainy day",
  },
  gaming: {
    path: "src/img/gaming.jpg",
    alt: "Ryan at a local Kansas City Lan Event; he's making a very disturbing face at the camera",
  },
  catman: {
    path: "src/img/catman.jpg",
    alt: "Ryan posing with a cat mask on head; photo taken at a local gift shop in Amsterdam",
  },
  telephone: {
    path: "src/img/telephone.jpg",
    alt: "Ryan using an old school London-esque telephone booth to make a very important phone call",
  }
}

function renderBody() {
  formatCopyRightString();
  // creates a new body and overide what's in index.html
  let htmlBody = document.createElement('body');
  document.body = htmlBody;

  let fullNameTitle = document.createElement('h1');
  fullNameTitle.setAttribute('id', 'name-title');
  fullNameTitle.append(`${me.basics.firstName} ${me.basics.lastName}`);
  
  htmlBody.appendChild(renderHeader());
  htmlBody.appendChild(renderPageContent());
  htmlBody.appendChild(renderFooter());
}

function renderHeader() {
  let header = document.createElement('div');
  header.setAttribute("id", "header");

  let navBar = document.createElement('div');
  navBar.setAttribute("id", "nav");

  let homeLabel = document.createElement('span');
  homeLabel.setAttribute("id", "nav-home");
  homeLabel.setAttribute("class", "nav-item");
  homeLabel.append(`${me.basics.firstName} ${me.basics.lastName}`);

  let navBarElements = [];
  for(label in nav) {
    element = document.createElement('span');
    element.setAttribute('class', 'nav-btn');
    element.setAttribute('class', 'nav-item');
    element.setAttribute('id', `${nav[label]}`);
    element.append(`${nav[label]}`);

    navBarElements.push(element);
  }

  navBar.appendChild(homeLabel);
  navBarElements.forEach(element => navBar.appendChild(element));
  header.appendChild(navBar);

  return header;
}

function renderPageContent() {
  let mainContent = document.createElement('div');
  mainContent.setAttribute('id', 'main-content');

  mainContent.appendChild(renderTitleCard());
  mainContent.appendChild(renderAboutInfo());
  mainContent.appendChild(renderPhotoGallery());

  return mainContent;
}

function renderAboutInfo() {
  let aboutInfo = document.createElement('div');
  aboutInfo.setAttribute('id', 'about');

  let p1 = document.createElement('div');
  p1.setAttribute('class', 'about-paragraph');
  p1.append(`${meLoremIpsum.about.paragraphOne}`);

  let p2 = document.createElement('div');
  p2.setAttribute('class', 'about-paragraph');
  p2.append(`${meLoremIpsum.about.paragraphTwo}`);

  let p3 = document.createElement('div');
  p3.setAttribute('class', 'about-paragraph');
  p3.append(`${meLoremIpsum.about.paragraphThree}`);

  let p4 = document.createElement('div');
  p4.setAttribute('class', 'about-paragraph');
  p4.append(`${meLoremIpsum.about.paragraphFour}`);

  aboutInfo.appendChild(p1);
  aboutInfo.appendChild(p2);
  aboutInfo.appendChild(p3);
  aboutInfo.appendChild(p4);

  return aboutInfo;
}

function renderTitleCard() {
  let titleCard = document.createElement('div');
  titleCard.setAttribute('id', 'title-card');

  let fullName = document.createElement('div');
  fullName.setAttribute('id', 'full-name');
  fullName.append(`${me.basics.firstName} ${me.basics.lastName}`);

  let title = document.createElement('div');
  title.setAttribute('id', 'title-label');
  title.append(`${me.basics.label}`);

  titleCard.appendChild(fullName);
  titleCard.appendChild(title);

  return titleCard;
}

function renderPhotoGallery() {
  let gallery = document.createElement('div');
  gallery.setAttribute('id', 'gallery');

  let londonPhoto = document.createElement('img');
  londonPhoto.setAttribute('src', `${imgs.london.path}`);
  londonPhoto.setAttribute('alt', `${imgs.london.alt}`);

  let gamingPhoto = document.createElement('img');
  gamingPhoto.setAttribute('src', `${imgs.gaming.path}`);
  gamingPhoto.setAttribute('alt', `${imgs.gaming.alt}`);

  let catmanPhoto = document.createElement('img');
  catmanPhoto.setAttribute('src', `${imgs.catman.path}`);
  catmanPhoto.setAttribute('alt', `${imgs.catman.alt}`);

  let telephonePhoto = document.createElement('img');
  telephonePhoto.setAttribute('src', `${imgs.telephone.path}`);
  telephonePhoto.setAttribute('alt', `${imgs.telephone.alt}`);

  gallery.appendChild(londonPhoto);
  gallery.appendChild(gamingPhoto);
  gallery.appendChild(catmanPhoto);
  gallery.appendChild(telephonePhoto);

  return gallery;
}

function renderFooter() {
  let footer = document.createElement('div');
  footer.setAttribute('id', 'footer');

  let sourceCodeLink = createSourceCodeLink();

  let disclaimer = document.createElement('span');
  disclaimer.append(`${me.copyright.disclaimer}`);

  let licenseInfo = document.createElement('span');
  licenseInfo.append(`${me.copyright.licenseInfo}`);
  
  footer.appendChild(disclaimer);
  footer.appendChild(sourceCodeLink);
  footer.appendChild(licenseInfo);
  
  return footer;
}

function createSourceCodeLink() {
  let sourceCodeLink = document.createElement('a');
  sourceCodeLink.setAttribute('href', `${me.copyright.github}`);
  sourceCodeLink.setAttribute('title', 'ryancross.github.io');
  sourceCodeLink.append(`${me.copyright.linkText}`);
  
  return sourceCodeLink;
}

/**
 * Gets the current year and formats the copyright string with it so I never have to update this text manually ever.
 */
function formatCopyRightString() {
  let today = new Date();
  const currentYear = today.getFullYear().toString();
  me.copyright.disclaimer = me.copyright.disclaimer.replace("{0}", currentYear);
}

document.body.onload = renderBody();
