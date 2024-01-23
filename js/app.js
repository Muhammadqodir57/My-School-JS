//-----------------Create Start--------------
const elBody = document.body;
const elContainer = document.createElement("div");
const elHeader = document.createElement("header");
const elTitle = document.createElement("h3");
const elMain = document.createElement("main");
const elHero = document.createElement("section");
const elHeroBox_2 = document.createElement("div");
const elHeroTitle = document.createElement("h1");
const elHeroText = document.createElement("p");
const elHeroBox = document.createElement("div");
const elHeroBtn_1 = document.createElement("button");
const elHeroBtn_2 = document.createElement("button");
const elHero_img = document.createElement("img");
// Header nav
const elList = document.createElement("ul");
const elItem_1 = document.createElement("li");
const elItem_2 = document.createElement("li");
const elItem_3 = document.createElement("li");
const elItem_4 = document.createElement("li");
const elLink_1 = document.createElement("a");
const elLink_2 = document.createElement("a");
const elLink_3 = document.createElement("a");
const elLink_4 = document.createElement("a");
const elBtn = document.createElement("button");
//-----------------Create End--------------

//-----------------------Header STYLE Start-------------------

elContainer.style.cssText = `
    width: 1150px;
    margin: 0 auto;
    padding: 0 20px;
`
elHeader.style.cssText = `
    margin-bottom: 99px;
    padding-top: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
elTitle.style.cssText = `
    color: #252B42;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0.1px;
`
elList.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0 20px
`
elLink_1.style.cssText = `
    color: var(--second-text-color, #737373);
    text-align: center;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
`
elLink_2.style.cssText = `
    color: var(--second-text-color, #737373);
    text-align: center;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
`
elLink_3.style.cssText = `
    color: var(--second-text-color, #737373);
    text-align: center;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
`
elLink_4.style.cssText = `
    color: var(--second-text-color, #737373);
    text-align: center;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
`
elBtn.style.cssText = `
    color: var(--light-text-color, #FFF);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.2px;
    border: none;
    padding: 15px 25px;
    border-radius: 5px;
    background: var(--primary-color, #CFE4E7);
`
//-----------------------Header STYLE End-------------------

//-----------------------Hero STYLE Start-------------------
elHero.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: space-between;
`
elHeroTitle.style.cssText = `
    margin-bottom: 30px;
    width: 542px;
    color: var(--text-color, #252B42);
    font-family: Montserrat;
    font-size: 58px;
    font-style: normal;
    font-weight: 700;
    line-height: 80px;
    letter-spacing: 0.2px;
`
elHeroText.style.cssText = `
    margin-bottom: 30px;
    width: 458px;
    color: var(--second-text-color, #737373);
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0.2px;
`
elHeroBtn_1.style.cssText = `
    padding: 15px 40px;
    border: none;
    border-radius: 5px;
    background: var(--primary-color, #CFE4E7);
    color: var(--light-text-color, #FFF);
    text-align: center;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.2px;
`
elHeroBtn_2.style.cssText = `
    padding: 15px 40px;
    border-radius: 5px;
    border: 1px solid var(--primary-color, #CFE4E7);
    color: var(--primary-color, #CFE4E7);
    text-align: center;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.2px;
`
elHeroBox.style.cssText = `
    display: flex;
    align-items: center;
    gap: 0 10px;
`
//-----------------------Hero STYLE End-------------------

//------------------Text Content Start-------------------
elTitle.textContent = "My school"
elLink_1.textContent = "Home";
elLink_2.textContent = "Product";
elLink_3.textContent = "Pricing";
elLink_4.textContent = "Contact";
elBtn.textContent = "Join us"
elHeroTitle.textContent = "HIGH QUALITY COURSES";
elHeroText.textContent = "Every day brings with it a fresh set of learning possibilities.";
elHeroBtn_1.textContent = "Join Us";
elHeroBtn_2.textContent = "Learn More";
elHero_img.src = "./svg.svg"
//------------------Text Content End-------------------



//------------------Append Header Start-------------------
elBody.append(elContainer)
elBody.append(elHeader);
elContainer.append(elHeader)
elHeader.append(elTitle)
elHeader.append(elList);
elList.append(elItem_1);
elList.append(elItem_2);
elList.append(elItem_3);
elList.append(elItem_4);
elItem_1.append(elLink_1);
elItem_2.append(elLink_2);
elItem_3.append(elLink_3);
elItem_4.append(elLink_4);
elHeader.append(elBtn)
//------------------Append Header End-------------------

//------------------Append Hero Start-------------------
elContainer.append(elMain);
elMain.append(elHero);
elHero.append(elHeroBox_2);
elHeroBox_2.append(elHeroTitle);
elHeroBox_2.append(elHeroText);
elHeroBox_2.append(elHeroBox);
elHeroBox.append(elHeroBtn_1);
elHeroBox.append(elHeroBtn_2);
elHero.append(elHero_img)
//------------------Append Hero End-------------------



