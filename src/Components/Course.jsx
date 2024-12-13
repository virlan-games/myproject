import React from "react";
import course1 from '../images/course1.png';
import course2 from '../images/course2.png';
import course3 from '../images/course3.png';
import course4 from '../images/course4.png';
import course5 from '../images/course5.png';
import course6 from '../images/course6.png';
import { Link } from 'react-router-dom';


function Course() {
    return (
            <div className="Corsemain">
               <div className="coursebanner">
                   <div className="courseheading">Our Courses</div>
                  <div className="coursedetails">Home Our Courses</div>
               </div>

                    <div className="Coursebox1">
                        <div className="boxa">
                            <div className="courseimg">
                            <img src={course1} />
                            </div>
                                <div className="ratingarea">
                                    <div className="starttext">English Proficiency</div>
                                    <div className="star">⭐⭐⭐⭐⭐</div>
                                </div>
                            <div className="boxaheading">IELTS Academic Course</div>
                            <div className="boxahead">Prepare for university studies with our comprehensive IELTS Academic Course. Learn</div>
                            <div className="enrollbutton"><button> <Link to="/apply" className="enrollbutton">Enroll Now</Link></button></div>
                        </div>
                        <div className="boxa">
                            <div className="courseimg">
                            <img src={course2} />
                            </div>
                                <div className="ratingarea">
                                    <div className="starttext">English Proficiency</div>
                                    <div className="star">⭐⭐⭐⭐⭐</div>
                                </div>
                            <div className="boxaheading">PTE Academic</div>
                            <div className="boxahead">Excel in PTE Academic with comprehensive training. Enhance language skills, ace exams, and</div>
                            <div className="enrollbutton"><button> <Link to="/apply" className="enrollbutton">Enroll Now</Link></button></div>
                        </div>
                        <div className="boxa">
                            <div className="courseimg">
                            <img src={course3} />
                            </div>
                                <div className="ratingarea">
                                    <div className="starttext">English Proficiency</div>
                                    <div className="star">⭐⭐⭐⭐⭐</div>
                                </div>
                            <div className="boxaheading">IELTS Life Skills (A1/B1)</div>
                            <div className="boxahead">Attain practical language competence with IELTS Life Skills A1/B1. Develop essential skills for</div>
                            <div className="enrollbutton"><button> <Link to="/apply" className="enrollbutton">Enroll Now</Link></button></div>
                        </div>                     
                 </div>

              <div className="Coursebox2">
                 <div className="boxa">
                            <div className="courseimg">
                            <img src={course4} />
                            </div>
                                <div className="ratingarea">
                                    <div className="starttext">English Proficiency</div>
                                    <div className="star">⭐⭐⭐⭐⭐</div>
                                </div>
                            <div className="boxaheading">IELTS General Training (GT) Course</div>
                            <div className="boxahead">Prepare for IELTS General with expert guidance. Improve your English, excel in the exam to open</div>
                            <div className="enrollbutton"><button> <Link to="/apply" className="enrollbutton">Enroll Now</Link></button></div>
                        </div>
                        <div className="boxa">
                            <div className="courseimg">
                            <img src={course5} />
                            </div>
                                <div className="ratingarea">
                                    <div className="starttext">English Proficiency</div>
                                    <div className="star">⭐⭐⭐⭐⭐</div>
                                </div>
                            <div className="boxaheading">LanguageCert International ESOL</div>
                            <div className="boxahead">Enhance your speaking skills with LangCert Speaking Course. Master fluency, communication,</div>
                            <div className="enrollbutton"><button> <Link to="/apply" className="enrollbutton">Enroll Now</Link></button></div>
                        </div>
                        <div className="boxa">
                            <div className="courseimg">
                            <img src={course6} />
                            </div>
                                <div className="ratingarea">
                                    <div className="starttext">English Proficiency</div>
                                    <div className="star">⭐⭐⭐⭐⭐</div>
                                </div>
                            <div className="boxaheading">Oxford ELLT - Speaking Course</div>
                            <div className="boxahead">Secure good bands in ELLT Oxford Speaking Test with this Course. Enhance communication skills</div>
                            <div className="enrollbutton"><button> <Link to="/apply" className="enrollbutton">Enroll Now</Link></button></div>
                        </div>                     
                 </div>
            </div>

    );
}

export default Course;