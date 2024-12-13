import React from "react";
import FAQSection from "./FAQSection";
import about from '../images/about.png';
import icef from '../images/icef.png';
import iceflogo from '../images/iceflogo.png';
import whyChoose from '../images/whyChoose.png';
import jet from '../images/jet.png';
import trophy from '../images/trophy.png';
import app from '../images/app.png';
import play from '../images/play.png';
import profile from '../images/profile.png';
import splash from '../images/splash (1).png';
import home from '../images/home.png';
import Artboard from '../images/Artboard.png';
import Artboard11 from '../images/Artboard11.png';
import Artboard2 from '../images/Artboard2.png';
import Artboard8 from '../images/Artboard8.png';
import Artboard13 from '../images/Artboard13.png';
import Artboard6 from '../images/6.png';
import Artboard88 from '../images/8.png';
import course1 from '../images/course1.png';
import course2 from '../images/course2.png';
import course3 from '../images/course3.png';
import wahab from '../images/wahab.png';
import blog1 from '../images/blog1.png';
import blog2 from '../images/blog2.png';
import blog3 from '../images/blog3.png';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className="home-container">
            <div className="homebanner">
                <div className="bannercontent">
                    <h1>Your Pathway<br/>
                    Just a Tap Away</h1>
                    <p>We're launching our new mobile app, giving students easy access to global
                    opportunities and personalized study abroad guidance.</p>
                    <div className="contentimages">
                        <img src={app} alt="App Store" width={128} height={40}/>
                        <img src={play} alt="Google Play" width={128} height={40} />
                    </div>
                </div>
                <div className="bannerimages">
                    <img src={home} alt="Home Screen" width={180} height={360} className="bannerimages1"/>
                    <img src={splash} alt="Splash Screen" width={230} height={430} className="bannerimages2"/>
                    <img src={profile} alt="Profile Screen" width={180} height={360} className="bannerimages3"/>
                </div>
            </div>

            <section className="Aboutmain">
                <div className="Abouttext">
                    <p className="section-title"><Link to="/contact" className="aboutlink">ABOUT US</Link></p> 
                    <h2 className="aboutheading">Overseas Education Consultants</h2>
                    <div className="aboutdeatails">
                        Education is a driving force that focuses on developing reflective thinking and abilities so that 
                        the human race can discover how they wish to exist in today's competitive and ever-changing global economy. 
                        Amidst extraordinary uncertainty and dynamic world order, Edify, a leading Study Abroad Consultant, 
                        is dedicated to helping higher education leaders worldwide build resilience, seize growth opportunities, 
                        and discover new ways to enhance their skill sets. With a deep commitment to our clients aspirations, 
                        we provide expert guidance on educational pathways, universities, scholarships, and the intricacies 
                        of the application process. We aim to enable students to access the best education tailored to their ambitions.
                    </div>
                </div>
                <div className="Aboutimage">
                    <img 
                        src={about} 
                        alt="About Edify Group" 
                        width={523} 
                        height={470} 
                    />
                </div>
            </section>

            <section className="Recognized">
                <h2 className="Recognizedheading">
                    Edify Group Recognized<br />
                    with Esteemed ICEF Agency Status
                </h2>
                <img 
                    src={icef} 
                    alt="ICEF Recognition" 
                    width={256} 
                    height={246} 
                />
                <p className="Recognizeddeatails">
                    Recognized globally as a hallmark of excellence and superior professional standards, the<br />
                    ICEF Agency Status (IAS) awarded to Edify Group of Companies is a testament to our<br />
                    distinctiveness and esteemed position within the international education industry.
                </p>
                <img 
                    src={iceflogo} alt="ICEF Logo" width={120} height={41} />
            </section>

            <section className="Choosemain">
                <div className="chooseimg">
                    <img 
                        src={whyChoose} alt="Why Choose Us" width={500} height={545} 
                    />
                </div>
                <div className="choosecontent">
                    <h2 className="Choosequestion">Why Choose Us?</h2>
                    <p className="ChooseAns">
                        We are unique in the quality of our services and stand out from our competitors.<br />
                        Unlike other consultancy firms in Pakistan, we truly care about our students.
                    </p>

                    <div className="choosedata">
                        <img src={jet} alt="Why Choose Us" width={40} height={40}  />
                        <div className="choosetext"> 
                            <h1>Unmatched Quality of Services and Genuine Care</h1>
                            <p>Edify stands out among other overseas education consultants in Pakistan due to our unique approach and unwavering dedication to our students. We genuinely care for the well-being and success of our students, going above and beyond to provide exceptional services that meet their individual needs and aspirations.</p>
                        </div>
                    </div>

                    <div className="choosedata">
                        <img src={trophy} alt="Why Choose Us" width={40} height={40}  />
                        <div className="choosetext"> 
                            <h1>Experience that Matters</h1>
                            <p>With over 5+ years of experience in the field of education consultancy, Edify brings invaluable expertise to the table. Our extensive knowledge and understanding of the study abroad process enable us to guide students effectively and navigate the complexities involved. We have successfully assisted numerous students in realizing their dreams of studying abroad, and our experience sets us apart from the competition.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="students">
                <div className="studentsdata">
                    <div className="text2">
                  <div className="heading"> <Link to="/contact" className="ourser">OUR SERVICES</Link></div>
                        <p>
                            We Strive to Provide the Finest Service
                            Possible to Our Students
                        </p>
                    </div>
                    <div className="text1">
                        Edify consultant provides A to Z services for student visa in major
                        universities and colleges of the countries around the globe, when
                        student come with dream of studying abroad.
                    </div>
                </div>

                <div className="block1">
                    <div className="block11 block1a">
                        <div className="imgbox">
                            <img src={Artboard} alt="Counselling" width={112} height={112} />
                            <p>1</p>
                        </div>
                        <div className="text">
                            <div className="heading">Counselling</div>
                            <p>
                                Applying for studying abroad is a huge decision which is why we do
                                not limit our counselling..
                            </p>
                        </div>
                    </div>
                    <div className="block11 block2a">
                        <div className="imgbox">
                            <img src={Artboard11} alt="Admission Guidance" width={112} height={112} />
                            <p>2</p>
                        </div>
                        <div className="text">
                            <div className="heading">Admission Guidance</div>
                            <p>
                                We give special attention to your application, highlighting the
                                areas essential for..
                            </p>
                        </div>
                    </div>
                    <div className="block11 block3a">
                        <div className="imgbox">
                            <img src={Artboard2} alt="University Selection" width={112} height={112} />
                            <p>3</p>
                        </div>
                        <div className="text">
                            <div className="heading">University Selection</div>
                            <p>
                                University selection is the most crucial stage of the application
                                process. It is done..
                            </p>
                        </div>
                    </div>
                </div>

                <div className="block1">
                    <div className="block11 block4a">
                        <div className="imgbox">
                            <img src={Artboard8} alt="Visa Application Assistance" width={112} height={112} />
                            <p>4</p>
                        </div>
                        <div className="text">
                            <div className="heading">Visa Application Assistance</div>
                            <p>
                                We help you in entire Visa process like, filling up applications,
                                preparing financial statements, and..
                            </p>
                        </div>
                    </div>
                    <div className="block11 block5a">
                        <div className="imgbox">
                            <img src={Artboard13} alt="Pre-Departure Orientation" width={112} height={112} />
                            <p>5</p>
                        </div>
                        <div className="text">
                            <div className="heading">Pre- Departure Orientation</div>
                            <p>
                                Prior to landing in a new country of your choice appropriate
                                guidance is..
                            </p>
                        </div>
                    </div>
                    <div className="block11 block6a">
                        <div className="imgbox">
                            <img src={Artboard6} alt="Travel Assistance" width={112} height={112} />
                            <p>6</p>
                        </div>
                        <div className="text">
                            <div className="heading">Travel Assistance</div>
                            <p>
                                We take care of booking flights well in advance to allow ideal
                                departure dates..
                            </p>
                        </div>
                    </div>
                </div>

                <div className="block1">
                    <div className="block11 block1a">
                        <div className="imgbox">
                            <img src={Artboard11} alt="Post-Departure Support" width={112} height={112} />
                            <p>7</p>
                        </div>
                        <div className="text">
                            <div className="heading">Post-Departure Support</div>
                            <p>
                                We at Edify continue to provide our support and help even when you
                                reach a new country…
                            </p>
                        </div>
                    </div>
                    <div className="block11 block2a">
                        <div className="imgbox">
                            <img src={Artboard88} alt="Financial Aid & Scholarship Guidance" width={112} height={112} />
                            <p>8</p>
                        </div>
                        <div className="text">
                            <div className="heading">
                                Financial Aid &amp; Scholarship Guidance
                            </div>
                            <p>
                                We provide guidance about securing scholarships, bursaries, loans
                                and..
                            </p>
                        </div>
                    </div>
                    <div className="block11 block3a">
                        <div className="imgbox">
                            <img src={Artboard} alt="Language Test Preparation" width={112} height={112} />
                            <p>9</p>
                        </div>
                        <div className="text">
                            <div className="heading">Language Test Preparation</div>
                            <p>
                                Here, at Edify, one of our expertise lies in preparing students for
                                the IELTS, PTE ..
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Courseboxtopheading"><Link to="/cours" className="topblogs">TOP COURSES</Link></div>
            <div className="Courseboxtop"><Link to="/cours" className="recentblogs">Our Featured Courses</Link></div>
            <div className="Coursebox2">
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

                 <div className="Courseboxtopheading"><Link to="/blog" className="topblogs">TOP BLOGS</Link></div> 
                 <div className="Courseboxtop"><Link to="/blog" className="recentblogs">Our Recent Blogs</Link></div>

                 <div className="blog11 blog13">
                 <Link to="/apply" className="enrollbutton">Enroll Now</Link>
                    <div className="blog-post">
                        <img src={blog1} alt="Blog 1" className="blog-image" />
                        <div className="blog-content">
                            <h3 className="blog-title">Student Life</h3>
                            <p className="blog-description">Studying ACCA in the UK: A Comprehensive Guide for Pakistani Students</p>
                            <div className="blogprofileimg">
                                <div className="profileimg"> <img src={wahab} alt="Blog 1" /></div>
                                <div className="profiledata">
                                    <div className="profilename ">Abdul-wahab</div>
                                    <div className="profiltime">4 days ago</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-post">
                    <img src={blog2} alt="Blog 1" className="blog-image" />
                        <div className="blog-content">
                            <h3 className="blog-title">Student Life</h3>
                            <p className="blog-description">The University of Notre Dame Australia Acceptance Rate in 2024 for Pakistani Students</p>
                            <div className="blogprofileimg">
                                <div className="profileimg"> <img src={wahab} alt="Blog 1" /></div>
                                <div className="profiledata">
                                    <div className="profilename ">Abdul-wahab</div>
                                    <div className="profiltime">4 days ago</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-post">
                    <img src={blog3} alt="Blog 1" className="blog-image" />
                        <div className="blog-content">
                            <h3 className="blog-title">News</h3>
                            <p className="blog-description">UK Net Migration Drops by 20% Following Dependants Rule Changes</p>
                            <div className="blogprofileimg">
                            <div className="profileimg"> <img src={wahab} alt="Blog 1" /></div>
                                <div className="profiledata">
                                    <div className="profilename ">Abdul-wahab</div>
                                    <div className="profiltime">4 days ago</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            <FAQSection/>
        </div>
    );
}

export default Home;