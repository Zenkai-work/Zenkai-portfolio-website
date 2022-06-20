/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
    {
        sl1: 1,
        name1 : "Paolo Greppi",
        designation1 : "Founder & Technical Director at Simevo s.r.l.",
        message1 : "Mikio is a conscientious developer. His problem-solving skills and a keen interest in learning new skillsets are remarkable. His hardworking nature and team-building abilities make him different from others.",
        

        sl2:2,
        name2 : "Özgür Hangişi",
        designation2 : "Founder at WebInStats", 
        message2 : "He is really helpful and cares about the details and timing. Will defiantly work with him again and recommend him to anyone.",
    },

    {
        sl1:3,
        name1 : "Daniel Harris",
        designation1 : "Web Engineer, IT Consultant at DanielHarris.net",
        message1 : "Mikio and I have worked on several projects. Apart from technical skills, he also has good soft skills. He has good experience with debugging and has excellent leadership qualities.",
        

        sl2:4,
        name2 : "John Thomas Holiman",
        designation2 : "Project Engineer at Galley Support Innovations",
        message2 : "Mikio completed really great work! He is an impressive problem solver who is able to address complex issues strategically and confidently.",
  },
];

AOS.init();
const fillData = () => {
  let output = "";

  references.forEach(
    ({
      sl1,
      image1,
      name1,
      designation1,
      message1,
      absbox_for_linkedin1,
      sl2,
      image2,
      name2,
      designation2,
      message2,
      absbox_for_linkedin2,
    }) =>
      (output += `<tr data-aos="zoom-in-left"> 
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referenceY">${message2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                    </tr>`)
  );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
