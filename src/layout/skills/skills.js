import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import M from "materialize-css";
import "./skills.css";

const Skills = () => {
  const navigate = useNavigate();
  const skill1Ref = useRef();
  const skill2Ref = useRef();
  const skill3Ref = useRef();
  const skill4Ref = useRef();
  const skill5Ref = useRef();
  const value1Ref = useRef();
  const value2Ref = useRef();
  const value3Ref = useRef();
  const value4Ref = useRef();
  const value5Ref = useRef();
  const techskill1Ref = useRef();
  const techvalue1Ref = useRef();
  const techskill2Ref = useRef();
  const techvalue2Ref = useRef();
  const techskill3Ref = useRef();
  const techvalue3Ref = useRef();
  const techskill4Ref = useRef();
  const techvalue4Ref = useRef();
  const techskill5Ref = useRef();
  const techvalue5Ref = useRef();

  const redirectToSignup = () => {
    navigate("/");
  };

  const redirectToOpleiding = () => {
    navigate("/opleiding");
  };

  const clicked = (e) => {
    e.preventDefault();

    // Access the values from the refs
    let skill1 = skill1Ref.current.value;
    let value1 = value1Ref.current.value;
    let skill2 = skill2Ref.current.value;
    let value2 = value2Ref.current.value;
    let skill3 = skill3Ref.current.value;
    let value3 = value3Ref.current.value;
    let skill4 = skill4Ref.current.value;
    let value4 = value4Ref.current.value;
    let skill5 = skill5Ref.current.value;
    let value5 = value5Ref.current.value;

    console.log(skill1, value1);
    console.log(skill2, value2);
    console.log(skill3, value3);
    console.log(skill4, value4);
    console.log(skill5, value5);

    // Send the data to the server
    const userId = localStorage.getItem("userId");
    const skills = {
      skill1,
      value1,
      skill2,
      value2,
      skill3,
      value3,
      skill4,
      value4,
      skill5,
      value5,
    };
    fetch("http://localhost:4000/skills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, skills }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("skills added", result);
        M.toast({ html: "Soft Skills added successfully", classes: "green" });
      })
      .catch((error) => {
        console.log("error adding skills", error);
      });
  };
  //send tech skills to the server
  const sendTechSkills = (e) => {
    e.preventDefault();

    let techskill1 = techskill1Ref.current.value;
    let techvalue1 = techvalue1Ref.current.value;
    let techskill2 = techskill2Ref.current.value;
    let techvalue2 = techvalue2Ref.current.value;
    let techskill3 = techskill3Ref.current.value;
    let techvalue3 = techvalue3Ref.current.value;
    let techskill4 = techskill4Ref.current.value;
    let techvalue4 = techvalue4Ref.current.value;
    let techskill5 = techskill5Ref.current.value;
    let techvalue5 = techvalue5Ref.current.value;

    console.log(
      techskill1,
      techvalue1,
      techskill1,
      techvalue1,
      techskill2,
      techvalue2,
      techskill3,
      techvalue3,
      techskill4,
      techvalue4,
      techskill5,
      techvalue5
    );

    const userId = localStorage.getItem('userId');
    const techskills = {
      techskill1,
      techvalue1,
      techskill2,
      techvalue2,
      techskill3,
      techvalue3,
      techskill4,
      techvalue4,
      techskill5,
      techvalue5,
    };
    fetch('http://localhost:4000/techskills', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, techskills }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('tech skills added', result);
        M.toast({ html: 'Tech Skills added successfully', classes: 'green' });
      })
      .catch((error) => {
        console.log('error adding tech skills', error);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="box1">
          <i
            onClick={redirectToSignup}
            className="fa-solid fa-arrow-left arrow-left"
          ></i>
          <p> Previous</p>
        </div>
        <div className="box2">
          <div className="steps-container">
            <div className="step not-filled">
              <i class="fa-solid fa-1"></i>
            </div>
            <div className="step filled">
              <i class="fa-solid fa-2"></i>
            </div>
            <div className="step not-filled">
              <i class="fa-solid fa-3"></i>
            </div>
            <div className="step not-filled">
              <i class="fa-solid fa-4"></i>
            </div>
          </div>
          <div className="title">
            <h1>Skills</h1>
          </div>
          <div className="skillsDiv">
            <div className="softSkills">
              <h2>Soft Skills</h2>
              <form className="softskillsForm" id="softskillsForm">
                <input
                  ref={skill1Ref}
                  className="inp1"
                  placeholder="Type Here your skill"
                />
                <input
                  ref={value1Ref}
                  className="inp2 range"
                  type="range"
                  min="1"
                  max="5"
                />
                <input
                  ref={skill2Ref}
                  className="inp1"
                  placeholder="Type Here your skill"
                />
                <input
                  ref={value2Ref}
                  className="inp2 range"
                  type="range"
                  min="1"
                  max="5"
                />
                <input
                  ref={skill3Ref}
                  className="inp1"
                  placeholder="Type Here your skill"
                />
                <input
                  ref={value3Ref}
                  className="inp2 range"
                  type="range"
                  min="1"
                  max="5"
                />
                <input
                  ref={skill4Ref}
                  className="inp1"
                  placeholder="Type Here your skill"
                />
                <input
                  ref={value4Ref}
                  className="inp2 range"
                  type="range"
                  min="1"
                  max="5"
                />
                <input
                  ref={skill5Ref}
                  className="inp1"
                  placeholder="Type Here your skill"
                />
                <input
                  ref={value5Ref}
                  className="inp2 range"
                  type="range"
                  min="1"
                  max="5"
                />
                <input
                  onClick={clicked}
                  className="submit send"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
            <div className="techSkills">
              <h2>Tech Skills</h2>
              <form className="techskillsForm" id="techskillsForm">
                <input
                  ref={techskill1Ref}
                  id='techskill1'
                  className='inp1'
                  placeholder='Type Here your skill'
                />
                <input
                  ref={techvalue1Ref}
                  id='techvalue1'
                  className='inp2 range'
                  type='range'
                  min='1'
                  max='5'
                />
                <input
                  ref={techskill2Ref}
                  id='techskill2'
                  className='inp1'
                  placeholder='Type Here your skill'
                />
                <input
                  ref={techvalue2Ref}
                  id='techvalue2'
                  className='inp2 range'
                  type='range'
                  min='1'
                  max='5'
                />
                <input
                  ref={techskill3Ref}
                  id='techskill3'
                  className='inp1'
                  placeholder='Type Here your skill'
                />
                <input
                  ref={techvalue3Ref}
                  id='techvalue3'
                  className='inp2 range'
                  type='range'
                  min='1'
                  max='5'
                />
                <input
                  ref={techskill4Ref}
                  id='techskill4'
                  className='inp1'
                  placeholder='Type Here your skill'
                />
                <input
                  ref={techvalue4Ref}
                  id='techvalue4'
                  className='inp2 range'
                  type='range'
                  min='1'
                  max='5'
                />
                <input
                  ref={techskill5Ref}
                  id='techskill5'
                  className='inp1'
                  placeholder='Type Here your skill'
                />
                <input
                  ref={techvalue5Ref}
                  id='techvalue5'
                  className='inp2 range'
                  type='range'
                  min='1'
                  max='5'
                />
                <input
                  onClick={sendTechSkills}
                  className='submit send'
                  type='submit'
                  value='Submit'
                />
              </form>
            </div>
          </div>
        </div>
        <div className="box3">
          <i
            onClick={redirectToOpleiding}
            className="fa-solid fa-arrow-right arrow-right"
          ></i>
          <p>Next</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
