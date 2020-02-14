import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="resume">
        <div className="resume_left">
          <div className="resume_profile">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQF4-epiyaHhmw/profile-displayphoto-shrink_200_200/0?e=1586390400&v=beta&t=gtSP8zJdje0-l_TTx9ED4-Hk4aBLCM1fYB7_O2b8MEs"
              alt="profile_pict"
            />
          </div>
          <div className="resume_content">
            <div className="resume_item resume_info">
              <div className="title">
                <p className="bold">Dawit J. Tilahun</p>
                <p className="regular">Junior Web Developer</p>
              </div>
              <ul>
                <li>
                  <div className="icon">
                    <i className="fas fa-map-signs" />
                  </div>
                  <div className="data">
                    Bildstensvägen 6Q Lgh 1005 <br /> Lund, Sweden
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-mobile-alt" />
                  </div>
                  <div className="data">+46 790 138 159</div>
                </li>
                <li>
                  <div className="icon">
                    <i className="far fa-envelope" />
                  </div>
                  <div className="data">dawitjtilahun@gmail.com</div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fab fa-firefox-browser" />
                  </div>
                  <div className="data">www.dawitjtilahun.com</div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_skills">
              <div className="title">
                <p className="bold">Skills</p>
              </div>
              <ul>
                <li>
                  <div className="skill_name">HTML</div>
                  <div className="skill_progress">
                    {/* <span style="width:80%;"></span>  */}
                  </div>
                  {/* <div className="skill_per">80%</div> */}
                </li>
                <li>
                  <div className="skill_name">CSS</div>
                  <div className="skill_progress">
                    {/* <span style="width: 70%;"></span> */}
                  </div>
                  <div className="skill_per">70%</div>
                </li>
                <li>
                  <div className="skill_name">JS</div>
                  <div className="skill_progress">
                    {/* <span style="width: 60%;"></span> */}
                  </div>
                  <div className="skill_per">60%</div>
                </li>
                <li>
                  <div className="skill_name">REACT</div>
                  <div className="skill_progress">
                    {/* <span style="width: 50%;"></span> */}
                  </div>
                  <div className="skill_per">50%</div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_social">
              <div className="title">
                <p className="bold">Social</p>
              </div>
              <ul>
                <li>
                  <div className="icon">
                    <i className="fab fa-facebook-f" />
                  </div>
                  <div className="data">
                    <p className="semi_bold">Facebook</p>
                    <p>Dawit J Tilahun@facebook.com</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fab fa-twitter" />
                  </div>
                  <div className="data">
                    <p className="semi_bold">Twitter</p>
                    <p>@DawitJTilahun</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fab fa-linkedin-in" />
                  </div>
                  <div className="data">
                    <p className="semi_bold">Linkedin</p>
                    <p>Dawit Tilahun Jembere@linkedin</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fab fa-youtube" />
                  </div>
                  <div className="data">
                    <p className="semi_bold">Youtube</p>
                    <p>dawitjtilahun@youtube</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="resume_right">
          <div className="resume_item resume_about">
            <div className="title">
              <p className="bold">About Me</p>
            </div>
            <p>
              I am studying programming at Foocoding. After completing the
              course, I want to work as website developer and can employ the
              knowledge and skill I gain through the training if given the
              opportunity by designing attractive and interactive websites which
              inturn would help me improve my skills.
              <br />I am also an experienced Lecturer with a demonstrated
              history of working in the higher education industry. Skilled in
              Lecturing, and Academic Writing in Descriptive and
              Historical-Comparative Linguistics. Strong education professional
              with a Higher Diploma in Professional Teacher Educator focused in
              Education from Dilla University.
            </p>
          </div>
          <div className="resume_item resume_education">
            <div className="title">
              <p className="bold">Education</p>
            </div>
            <ul>
              <li>
                <div className="date"> 2014 - 2019</div>
                <div className="info">
                  <p className="semi-bold">Addis Ababa University</p>
                  <p>PhD in Linguistics</p>
                </div>
              </li>
              <li>
                <div className="date"> 2003 - 2005</div>
                <div className="info">
                  <p className="semi-bold">Addis Ababa University</p>
                  <p>MA in Linguistics</p>
                </div>
              </li>
              <li>
                <div className="date"> 1996 - 2000</div>
                <div className="info">
                  <p className="semi-bold">Addis Ababa University</p>
                  <p>BA in Linguistics</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="resume_item resume_experience">
          <div className="title">
            <p className="bold">Experience</p>
            <ul>
              <li>
                <div className="date"> 2008 - 2019</div>
                <div className="info">
                  <p className="semi-bold">Dilla University</p>
                  <p>Lecturer and Researcher</p>
                </div>
              </li>
              <li>
                <div className="date"> 2005 - 2008</div>
                <div className="info">
                  <p className="semi-bold">St. Mary's University</p>
                  <p>Lecturer and Research Officer</p>
                </div>
              </li>
              <li>
                <div className="date"> 2002 - 2003</div>
                <div className="info">
                  <p className="semi-bold">The Scope and Addis Fortune</p>
                  <p>Reporter and Editor</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="resume_item resume_hobby">
          <div className="title">
            <p className="bold">Hobby</p>
          </div>
          <ul>
            <li>
              <i className="fas fa-book" aria-hidden="true" />
            </li>
            <li>
              <i className="fas fa-gamepad" aria-hidden="true" />
            </li>
            <li>
              <i className="fas fa-music" aria-hidden="true" />
            </li>
            <li>
              <i className="fab fa-pagelines" aria-hidden="true" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
