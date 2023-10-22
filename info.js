let info = {
  name: "Hippolyte Bonabeau",
  logo_name: "Hippolyte Bonabeau",
  flat_picture: require("./src/assets/me.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "Hello ! I am Hippolyte Bonabeau, an M2 student pursuing an Msc in Creative Technology @ Devinci Innovation Center in Paris, France", 
  links: {
    linkedin: "https://www.linkedin.com/in/hippolyte-bonabeau/",
    github: "https://github.com/hippobo",
    resume: "https://drive.google.com/file/d/1QqQwUlCAvYlTu8raZG9jlwb_MWLgzP7S/view?usp=sharing",
  },
  education: [
    {
      name: "ESILV",
      place: "Paris",
      date: "September 2019 - May 2024",
      degree: "Msc in Creative Technology",
      description:
        "The De Vinci Innovation Center is the trans-disciplinary and innovative hub of the Pôle Léonard de Vinci. We invent real-world, human-centered technologies with long-term perspectives for our planet. The human learning group creates tools that empower the lifelong construction of knowledge and know-how, engaging diverse learners through embodied and multimodal experiences.",
      skills: [
        "Human-Computer Interaction",
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Electronics",
        "PCB Design",
      ]
    },
  ],
  experiences: [
    {
      name: "INRIA",
      place: "Paris, France",
      date: "May 2023 - September 2023",
      position: "Research Intern @ WILLOW",
      description:
        "Computer vision internship in the WILLOW team in collaboration with HumanLab, working on generating custom fitted writing orthoses for people with disabilities using hand shape and pose estimation. Designed, Coded and Deployed a web application that integrated the project pipeline from end to end. Supervisor : Etienne Moullet",
        
        
        
      skills: ["Computer Vision", "Pytorch", "Deep Learning", "Python", "OpenCV", "JavaScript", "Flask", "HTML" , "Docker", "Git", "Scipy"]
    },
    {
      name: "LéoSphère",
      place: "Paris, France",
      date: "June 2022 - May 2023",
      position: "President",
      description: "President of school pétanque associaton, managing a group of board members to organize sport events.",
      skills: ["Leadership & Team Management", "Event Planning & Organization", "Communication Skills", "Problem-Solving & Adaptability", "inancial Planning/Budget Management"]
    },
    {
      name: "Fountaine Pajot",
      place: "La Rochelle, France",
      date: "June 2021 - July 2021",
      position: "Design Office Engineer Intern",
      description:
        "In the design office of La Rochelle, I was able to have a space dedicated to work, surrounded by a heterogeneous, dynamic, and caring team. The tasks I was given consisted in updating parts drawings, modeling parts on SolidWorks, taking care of improvement sheets, which allowed me to get feedback from the operators of the factory in La Rochelle and try to solve problems that would make the process of repetitive tasks more efficient and improve working conditions. Overall, my experience was extremely fulfilling whether it be the teamwork, getting a taste of factory and office working conditions and environment, or the manual and mental skills I learned thanks to the great team of engineers and operators.",
      skills: ["SolidWorks", "Process Optimization", "Interdisciplinary Communication", "Team Collaboration", "Adaptive Learning"]
    },
    {
      name: "Fountaine Pajot",
      place: "Aigrefeuille d'Aunis, France",
      date: "June 2021 - July 2021",
      position: "Production Chain Operator",
      description: "By integrating the various positions available in the company, in particular by putting myself in the place of an operator within the production chain, as a carpenter, electrician, plumber, stratifier and as an engineer in the technical design office team, I was able to discover the various stages of construction of a boat, the design of the parts, the relations with the various suppliers, the various positions within the chain, the relationship between engineers, managers and operators. My time in the company consisted in going from post to post, following the different stages of production.",
      skills: ["Versatile Technical Skills", "Operational Workflow Familiarity", "Dynamic Role Adaptation"]
    },
    
    {
      name: "AgroParisTech",
      place: "Paris, France",
      date: "Feb 2015",
      position: "Research Study Assistant",
      description: "Research Assistant to Hervé This, mostly observation and some light lab manipulation. I was introduced to the world of lab research and the various processes involved.",
     
    },
  ],
  skills: [
   
    {
      title: "Programming",
      info: [
        "Python (OpenCV, Torch, TensorFlow, Numpy, Pandas, Scikit-learn, Flask) ","Javascript","Java","C#","HTML", "CSS", "JS", "Matlab"],
      icon: "fa fa-code"
    },
    {
      title: "Electronics",
      info: [
        "Arduino" , "Teensy" ,"Prototyping", "Soldering (SMD, THT)", "PCB Design", ],
      icon: "fa fa-cubes"
    },
    {
      title: "Fabrication",
      info: ["SolidWorks", "Prototyping", "3D Printing"],
      icon: "fas fa-laptop-code"
    },
  ],
  portfolio: [
    {
      name: "Inkredable Hand Mesh Reconstruction",
      pictures: [
        {
          img: require("./src/assets/portfolio/inkredable/orthese2.jpeg")
        },
        {
          img: require("./src/assets/portfolio/inkredable/meshvsimage.png")
        },
        {
          img: require("./src/assets/portfolio/inkredable/flaskapp1.gif")
        },
        {
          img: require("./src/assets/portfolio/inkredable/flaskapp2.gif")
        }, {
          img: require("./src/assets/portfolio/inkredable/flaskapp3.gif")
        }, {
          img: require("./src/assets/portfolio/inkredable/flask_appgif4.gif")
        },
      ],
      technologies: ["Python", "OpenCV", "Pytorch", "Flask", "Docker"],

      github:
        "https://github.com/hippobo/Inkreadable-Hand-Mesh-Reconstruction",
      visit: "https://github.com/hippobo/Inkreadable-Hand-Mesh-Reconstruction",
      description:
      "This project is a tool built using Microsoft's open-source mesh reconstruction repo, Mesh Graphormer. MeshGraphormer uses 224x224 images of centered hands to render hand meshes. Using the mesh and camera information, we recreate the placement of the user's hand in 3D space and find the corresponding dimensions of his fingers. An orthosis is then generated as a 3D-printable STL file for writing purposes. The goal of this project was to create an open-source tool usable by people with just an rgb webcam and a reference point. We wanted to make it possible for people that had trouble writing, including people with d isabilities, to be able to print a simple orthosis."
    },
    {
      name: "Interactive Table",
      pictures: [
        {
          img: require("./src/assets/portfolio/interactivetable/table.png")
        },
        
      ],
      technologies: ["Processing","JavaSript","OpenCV"],
      github: "https://dvic.devinci.fr/projects/interactive-chess-table",
      visit: "https://github.com/hippobo/Aruco-Chess",
      description:
        "In this project, tangible chess pieces are present on the board for both players. Fiducial markers underneath each piece are used in the detection of the chess piece type and real-time positions. A camera-projector system inside the table process and display information depending on movements on the surface of the table. "
    },
    {
      name: "Face Recognition Application", 
      pictures: [
        {
          img: require("./src/assets/portfolio/faceidapp/access1.jpg")
        },
        {
          img: require("./src/assets/portfolio/faceidapp/access2.jpg")
        },
        {
          img: require("./src/assets/portfolio/faceidapp/user_creation.jpg")
        },
        {
          img: require("./src/assets/portfolio/faceidapp/user_deletion.png")
        },
        
      ],
      technologies: ["Python", "OpenCV", "Streamlit", "MongoDB"],
      category: "Web App",
      github: "https://github.com/hippobo/face-id-streamlit",
      visit: "https://github.com/hippobo/face-id-streamlit",
      description:
        "Locally hosted face recognition webapp written using streamlit and MongoDB"
    },
    {
      name: "Hex Synth", 
      pictures: [
        {
          img: require("./src/assets/portfolio/hex/hexsynth1.jpg")
        },
        {
          img: require("./src/assets/portfolio/hex/hexsynth2.jpg")
        },
      
      ],
      technologies: ["Kicad", "Arduino", "PCB Design"],
      github:
        "https://github.com/hippobo/HMAE_Hex_Synth",
      visit: "https://github.com/hippobo/HMAE_Hex_Synth",
      description:
        " All in one PCB synth project with resistive touch pads, based on the HexSynth design by EkkoFlok."
    },
  ],
};

export default info;
