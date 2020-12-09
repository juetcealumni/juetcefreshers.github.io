import React from 'react'
import Pagenav from './pagenav.js'
import TouristIntro from '../intro/touristintro.js'

function Grade() {
  return (
    <div>
      <TouristIntro intro="Grading System of Engineering at Jadavpur University" />
      <Pagenav />
      <div className="container fade">
        <h3 className="heading-text3"> Grading System </h3>
        <p><li>Detailed grading system is available <a target="_blank" rel="noopener noreferrer" href='https://github.com/juetcefreshers/juetce-first-year-course/blob/main/JADAVPUR%20EXAMINATION%20RULES.pdf'>here.</a></li></p>
        <hr />
        <h5 className="heading-text">Evatluation of Theory Courses</h5>
  The evaluation of students' performance in a theory course is a continuous process. A Student’s performance
   in theory papers will be evaluated Class Tests and an End-Semester Examination.
   <h6 className="heading-text2">Examinations</h6>
        <p><li>In each examination paper, two class tests will be held for the papers taught by
        single teacher and one class test will be taken by each teacher for the papers taught
by two teachers each of which will be for 30 marks.</li></p>
        <p><li>The net class test marks in each examination paper will be the arithmetic mean of
the two class test marks of the respective paper.</li></p>
        <p><li>There will be no marks for attendance.</li></p>
       <p><li>The Exact date and time of the class tests will be determined by respective teachers by consultation with the Class Representatives and Students of the class.</li></p>


        <h6 className="heading-text2">Weightages</h6>
        <p>
          A typical distribution of relative weightage for the various modes of assessments is mentioned below. The
          course teacher will inform the students about these weightages at the start of the semester.
       </p>
        <li> Class Test (Two CT in one semester) : 30%</li>
        <li> End-semester Examination : 70%</li>
        <hr />
        <h5 className="heading-text">Evatluation of Lab Courses</h5>
        <p>
          The assessment in a laboratory course will be based on continuous evaluation of the student’s weekly
          performance in laboratory experiments/ work, quality of their reports and a final performance in a semester-end
          test that contains viva-voce. The semester-end test on laboratory sessional will
          normally be held a week before the end-semester theory examinations.
       </p>
        <h6 className="heading-text2">Weightages that are involved in the grading related to the Lab Courses</h6>
        <li>Regular attendance and performance in laboratory works</li>
        <li>Quality of laboratory reports</li>
        <li>No active backlog in lab classes (other than exceptional unavoidable circumstances)</li>
        <li>Viva-voce/Teacher’s Assessment at end of semester</li>
        <hr />
        <h5 className="heading-text"> Calculation of CGPA</h5>
        <p>
          Every subject has a credit(C).The grade point one gets in a subject is denoted by grade(G).
           <br />
          <br />
          <li>S.G.P.A.(Semester Grade Point Average) : &#8512;(Ci.Gi)/&#8512;(Ci)</li>
          <br />
          <li>C.G.P.A.(Cumulative Grade Point Average) : &#8512;(Ci.Gi)/&#8512;(Ci)</li>
          <br />
           Here S.G.P.A. reflects performance of a student in a specific semester whereas C.G.P.A. reflects the overall performance
             of a student throughout all semesters.
           <li>A student will be declared pass without any supplementary if he/she scores 50% in
          aggregate of all the examination papers of both the semesters in the same
          academic year and 40% or more in each examination paper of both the
          semesters in the same academic year.
          </li>
          <li>
            A student will have supplementary in an examination paper if he/she scores 50%
            in aggregate of all the examination papers of both the semesters in the same
            academic year but scores less than 40% in that paper.
          </li>
          <li>Pass Marks of Laboratory subjects are 50%.</li>
          <li>A student will be retained in the same year of study if he/she gets four or more supplementary in two semesters of an academic year.</li>
        </p>
        <hr />
      </div>
    </div>
  );
}

export default Grade;
