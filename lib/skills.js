export default {
 "name": "Skill tree",
 "base": true,
 "children": [
  {
   "name": "General",
   "base": true,
   "children": [
    {"name": "Communication", 
     "base": true, 
     "children": [
      {"name": "Academic writing", "base": false, "size": 3},
      {"name": "Data visualisation", "base": false, "size": 3},
      {"name": "Presentations", "base": false, "size": 3}
     ]
    },
    {"name": "Interpersonal", 
     "base": true, 
     "children": [
      {"name": "Teamwork", "base": false, "size": 3},
      {"name": "Listening", "base": false, "size": 2},
      {"name": "Confidence", "base": false, "size": 2},
      {"name": "Negotiation", "base": false, "size": 2},
      {"name": "Ethics", "base": false, "size": 2},
      {"name": "Leadership", "base": false, "size": 3}
     ]
    },
    {"name": "Organisation", 
     "base": true, 
     "children": [
      {"name": "Punctuality", "base": false, "size": 3},
      {"name": "Motivation", "base": false, "size": 4},
      {"name": "Deadlines", "base": false, "size": 4}
     ]
    },
    {"name": "Aptitude", 
     "base": true, 
     "children": [
      {"name": "Analytical", "base": false, "size": 3},
      {"name": "Pressure working", "base": false, "size": 3},
      {"name": "Data wrangling", "base": false, "size": 2},
      {"name": "Problem solving", "base": false, "size": 3}
     ]
    }
   ]
  },
  {
   "name": "Knowledge",
   "base": true,
   "children": [
    {"name": "Mathematics", 
     "base": true, 
     "children": [
      {"name": "Fundamentals", 
       "base": true, 
       "children": [
        {"name": "Linear algebra", "base": false, "size": 3},
        {"name": "Complex analysis", "base": false, "size": 2},
        {"name": "Series transforms", "base": false, "size": 3},
        {"name": "Group theory", "base": false, "size": 2},
        {"name": "Coordinate transforms", "base": false, "size": 3}
       ]
      },
      {"name": "Calculus", 
       "base": true, 
       "children": [
        {"name": "Multivariate", "base": false, "size": 3},
        {"name": "Differential equations", "base": false, "size": 3},
        {"name": "Integral equations", "base": false, "size": 2},
        {"name": "Vector", "base": false, "size": 3},
        {"name": "Variations", "base": false, "size": 2},
        {"name": "Integral transforms", "base": false, "size": 2}
       ]
      },
      {"name": "Statistics", 
       "base": true, 
       "children": [
        {"name": "Parameter estimation", "base": false, "size": 3},
        {"name": "Probability distributions", "base": false, "size": 3},
        {"name": "MLE", "base": false, "size": 3},
        {"name": "Goodness-of-fit", "base": false, "size": 3},
        {"name": "Monte Carlo", "base": false, "size": 3},
        {"name": "Machine learning", "base": false, "size": 3},
        {"name": "Stochastic processes", "base": false, "size": 2},
        {"name": "Hypothesis testing", "base": false, "size": 3}
       ]
      }
     ]
    },
    {"name": "Physics", 
     "base": true, 
     "children": [
      {"name": "Quantum", 
       "base": true, 
       "children": [
        {"name": "Mechanics", "base": false, "size": 3},
        {"name": "Electrodynamics", "base": false, "size": 3},
        {"name": "Chromodynamics", "base": false, "size": 3},
        {"name": "Field theory", "base": false, "size": 3}
       ]
      },
      {"name": "Classical", 
       "base": true, 
       "children": [
        {"name": "Mechanics", "base": false, "size": 3},
        {"name": "Nonlinear dynamics", "base": false, "size": 3},
        {"name": "Electrodynamics", "base": false, "size": 3},
        {"name": "Fluid dynamics", "base": false, "size": 2}
       ]
      },
      {"name": "Optics", 
       "base": true, 
       "children": [
        {"name": "Lasers", "base": false, "size": 2},
        {"name": "Photonics", "base": false, "size": 1}
       ]
      },
      {"name": "Statistical", 
       "base": true, 
       "children": [
        {"name": "Thermodynamics", "base": false, "size": 3},
        {"name": "Bose and Einstein gases", "base": false, "size": 2}
       ]
      },
      {"name": "Astophysics", 
       "base": true, 
       "children": [
        {"name": "Cosmology", "base": false, "size": 2},
        {"name": "General relativity", "base": false, "size": 3}
       ]
      },
      {"name": "Modern", 
       "base": true, 
       "children": [
        {"name": "Particle", "base": false, "size": 4},
        {"name": "Solid state", "base": false, "size": 2},
        {"name": "Nuclear", "base": false, "size": 3}
       ]
      }
     ]
    },
    {
     "name": "Chemistry",
     "base": true,
     "children": [
      {"name": "Nuclear physics", "base": false, "size": 3},
      {"name": "Molecules", "base": false, "size": 2},
      {"name": "Radioactivity", "base": false, "size": 3},
      {"name": "Crystal structures", "base": false, "size": 2}
     ]
    },
    {
     "name": "Biology",
     "base": true,
     "children": [
      {"name": "Systems", "base": false, "size": 1},
      {"name": "Mass spectrometry", "base": false, "size": 2},
      {"name": "NMR", "base": false, "size": 2}
     ]
    },
    {
     "name": "Materials",
     "base": true,
     "children": [
      {"name": "Semiconductors", "base": false, "size": 2},
      {"name": "Graphene", "base": false, "size": 2}
     ]
    },
    {
     "name": "Computing",
     "base": true,
     "children": [
      {"name": "Numerical analysis", "base": false, "size": 3},
      {"name": "Monte Carlo", "base": false, "size": 3},
      {"name": "Optimisation", "base": false, "size": 2},
      {"name": "Modelling", "base": false, "size": 3},
      {"name": "Data streams", "base": false, "size": 3},
      {"name": "OOP", "base": false, "size": 3},
      {"name": "Computer algebra", "base": false, "size": 2}
     ]
    }
   ]
  },
  {
   "name": "Hardware",
   "base": true,
   "children": [
    {"name": "Raspberry pi", "base": false, "size": 2},
    {"name": "Electronics", "base": false, "size": 2},
    {"name": "Oscilloscopes", "base": false, "size": 2},
    {"name": "AV processing", "base": false, "size": 1}
   ]
  },
  {
   "name": "Software",
   "base": true,
   "children": [
    {
     "name": "Common",
     "base": true,
     "children": [
      {"name": "Word", "base": false, "size": 3},
      {"name": "Excel", "base": false, "size": 3},
      {"name": "Powerpoint", "base": false, "size": 3}
     ]
    },
    {
     "name": "Concepts",
     "base": true,
     "children": [
      {"name": "High throughput", "base": false, "size": 2},
      {"name": "GPU programming", "base": false, "size": 1},
      {"name": "Web", "base": false, "size": 2},
      {"name": "App", "base": false, "size": 2},
      {"name": "Testing", "base": false, "size": 3},
      {"name": "Debugging", "base": false, "size": 2},
      {"name": "Game", "base": false, "size": 2},
      {"name": "Release management", 
       "base": true, 
       "children": [
        {"name": "Continuous integration", "base": false, "size": 3},
        {"name": "Code deployment", "base": false, "size": 3}
       ]
      }
     ]
    },
    {
     "name": "Languages",
     "base": true,
     "children": [
      {"name": "Markup", 
       "base": true, 
       "children": [
        {"name": "HTML", "base": false, "size": 2},
        {"name": "LaTeX", "base": false, "size": 3},
        {"name": "Markdown", "base": false, "size": 2}
       ]
      },
      {"name": "Scripting", 
       "base": true, 
       "children": [
        {"name": "Bash", "base": false, "size": 3}
       ]
      },
      {"name": "Compiled", 
       "base": true, 
       "children": [
        {"name": "C/C++", "base": false, "size": 3},
        {"name": "Java", "base": false, "size": 1}
       ]
      },
      {"name": "Interpreted", 
       "base": true, 
       "children": [
        {"name": "Python", "base": false, "size": 3},
        {"name": "Javascript", "base": false, "size": 2},
        {"name": "Mathematica", "base": false, "size": 1},
        {"name": "MATLAB", "base": false, "size": 1}
       ]
      },
      {"name": "Style sheet", 
       "base": true, 
       "children": [
        {"name": "CSS", "base": false, "size": 2}
       ]
      }
     ]
    },
    {
     "name": "Specialist",
     "base": true,
     "children": [
      {"name": "Scientific", 
       "base": true, 
       "children": [
        {"name": "Geant4", "base": false, "size": 2},
        {"name": "LArSoft", "base": false, "size": 3},
        {"name": "MantidPlot", "base": false, "size": 1}
       ]
      },
      {"name": "Statistics/ML", 
       "base": true, 
       "children": [
        {"name": "ROOT", "base": false, "size": 4},
        {"name": "TensorFlow", "base": false, "size": 2},
        {"name": "Scipy", "base": false, "size": 2},
        {"name": "OpenCV", "base": false, "size": 2}
       ]
      },
      {"name": "Technical", 
       "base": true, 
       "children": [
        {"name": "HTCondor", "base": false, "size": 1},
        {"name": "jobsub", "base": false, "size": 2},
        {"name": "CMake/Make", "base": false, "size": 3},
        {"name": "LabVIEW", "base": false, "size": 2}
       ]
      },
      {"name": "Version control", 
       "base": true, 
       "children": [
        {"name": "MRB", "base": false, "size": 2},
        {"name": "Git", "base": false, "size": 3},
        {"name": "Github", "base": false, "size": 3}
       ]
      },
      {"name": "Testing/Deployment", 
       "base": true, 
       "children": [
        {"name": "Jenkins", "base": false, "size": 3},
        {"name": "Travis", "base": false, "size": 2},
        {"name": "CVMFS", "base": false, "size": 3}
       ]
      },
      {"name": "Web/App/Game", 
       "base": true, 
       "children": [
        {"name": "QT", "base": false, "size": 3},
        {"name": "Jekyll", "base": false, "size": 2},
        {"name": "Eclipse", "base": false, "size": 1},
        {"name": "Phaser", "base": false, "size": 2}
       ]
      }
     ]
    }
   ]
  }
 ]
}
