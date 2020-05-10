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
    "disclaimer": "Contents of this site are © Copyright 2019-2020 Ryan Cross. All rights reserved. ",
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

headerLabels = {
  projects: "Projects",
  resume: "Resume",
  contact: "Contact",
  games: "Games"
}

function renderBody() {
  // creates a new body and overide what's in index.html
  let htmlBody = document.createElement('body');
  document.body = htmlBody;

  let fullNameTitle = document.createElement('h1');
  fullNameTitle.setAttribute('id', 'name-title');
  fullNameTitle.append(`${me.basics.firstName} ${me.basics.lastName}`);
  
  htmlBody.appendChild(renderHeader());
  htmlBody.appendChild(renderMainContent());
  htmlBody.appendChild(renderFooter());
}

function renderHeader() {
  let header = document.createElement('div');
  header.setAttribute("id", "header");

  let headerElements = [];
  
  for(label in headerLabels) {
    element = document.createElement('span');
    element.setAttribute('class', 'header-btn');
    element.setAttribute('id', `${headerLabels[label]}`);
    element.append(`${headerLabels[label]}`);

    headerElements.push(element);
  }

  headerElements.forEach(element => header.appendChild(element))
  return header;
}

function renderMainContent() {
  let mainContent = document.createElement('div');
  mainContent.setAttribute('id', 'main-content');

  let p1 = document.createElement('div');
  p1.setAttribute('class', 'intro-paragraph');
  p1.append(`${meLoremIpsum.about.paragraphOne}`);

  let p2 = document.createElement('div');
  p2.setAttribute('class', 'intro-paragraph');
  p2.append(`${meLoremIpsum.about.paragraphTwo}`);

  let p3 = document.createElement('div');
  p3.setAttribute('class', 'intro-paragraph');
  p3.append(`${meLoremIpsum.about.paragraphThree}`);

  let p4 = document.createElement('div');
  p4.setAttribute('class', 'intro-paragraph');
  p4.append(`${meLoremIpsum.about.paragraphFour}`);

  mainContent.appendChild(p1);
  mainContent.appendChild(p2);
  mainContent.appendChild(p3);
  mainContent.appendChild(p4);

  return mainContent;
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

document.body.onload = renderBody();
